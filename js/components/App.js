var React = require('react');
var StatusPost = require('./StatusPost');
var Posts = require('./Posts');
var PostStore = require('../stores/PostStore');

function getPostState() {
	return {
		posts: PostStore.getAll()
	}
}

var app = React.createClass({

	getInitialState: function() {
		return getPostState();
	},

	componentDidMount: function() {
		PostStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		PostStore.removeChangeListener(this._onChange);	
	},

	render: function() {
		return (
			<div className="main-wall">
				<StatusPost/>
				<hr/>
				<Posts allPosts={this.state.posts}/>
			</div>
		);
	},

	_onChange: function() {
		this.setState(getPostState());
	}
});

module.exports = app;