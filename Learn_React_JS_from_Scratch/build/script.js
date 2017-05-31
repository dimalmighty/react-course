var Courses = React.createClass({
	render: function () {
		return React.createElement(
			'span',
			null,
			'Hello ',
			this.props.name,
			'!'
		);
	}
});

var properties = {
	name: 'Dimos',
	music: 'trance'
};

var coursesElement = React.createElement(Courses, properties);

React.render(coursesElement, document.getElementById('container'));