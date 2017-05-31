var Todo = React.createClass({

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'TODO:'
			)
		);
	}

});

React.render(React.createElement(Todo, null), document.getElementById('todo'));