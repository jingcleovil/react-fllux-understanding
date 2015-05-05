var React = require('react');
var PostActions = require('../actions/PostActions');

function postValues() {
	return {
		text: ''
	}
}

var StatusPost = React.createClass({

	getInitialState: function() {
		return postValues();
	},

	onChange: function(e) {
		this.setState({
			text: e.target.value 
		});
	},

	submit: function(e) {
		e.preventDefault();

		React.findDOMNode(this.refs.postStatus).focus();

		PostActions.create(this.state.text);
		this.setState(postValues());
	},

	render: function() {
		return (
			<div>
				<form onSubmit={this.submit}>
					<textarea onChange={this.onChange} ref="postStatus" value={this.state.text} cols="50" rows="5"/> <br/>
					<button type="submit">Post</button>
				</form>
			</div>
		);
	}

});

module.exports = StatusPost;