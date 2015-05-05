var React = require('react');

var Posts = React.createClass({


	getDefaultProps: function() {
		return {
			allPosts:  []
		};
	},

	render: function() {
		return (
			<div>
				<ul>
					{Object.keys(this.props.allPosts).map(function(item){
						return (
							<li key={this.props.allPosts[item].id}>{this.props.allPosts[item].text}</li>
						);
					}.bind(this))}
				</ul>
			</div>
		);
	}

});

module.exports = Posts;