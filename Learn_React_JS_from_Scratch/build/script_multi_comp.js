var courseList = ['Learn ReactJS', 'Learn AngularJS', 'Learn NodeJS', 'Learn Fatwire', 'Learn Webpack'];

var Courses = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			'Courses on offer:',
			React.createElement(CourseColection, { list: this.props.list })
		);
	}
});

var CourseColection = React.createClass({

	render: function () {
		return React.createElement(
			'ul',
			null,
			this.props.list.map(function (courseName, index) {
				return React.createElement(Course, { key: 'key' + index, name: courseName });
			})
		);
	}
});

var Course = React.createClass({
	render: function () {
		return React.createElement(
			'li',
			null,
			this.props.name
		);
	}
});

var coursesElement = React.createElement(Courses, { list: courseList });
ReactDOM.render(coursesElement, document.getElementById('container'));