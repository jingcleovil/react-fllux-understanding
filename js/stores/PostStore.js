var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var PostConstant = require('../constants/PostConstant');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _posts = {};

function create(text) {

	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	 _posts[id] = {
	    id: id,
	    complete: false,
	    text: text
	 };
}

var PostStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAll: function() {
		return _posts;
	},

	/**
	* @param {function} callback
	*/
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	* @param {function} callback
	*/
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) {
		case PostConstant.POST_CREATE: 
			if(action != '') {
				create(action.text);
			}
			break;
	}

	PostStore.emitChange();
})

module.exports = PostStore;