var Dispatcher = require('../dispatcher/Dispatcher');
var PostConstant = require('../constants/PostConstant');

var PostActions = {

	create: function(text) {
		Dispatcher.dispatch({
			actionType: PostConstant.POST_CREATE,
			text: text
		})
	}
}

module.exports = PostActions;