var Courses = React.createClass({
	render: function(){
		return (<span>Hello {this.props.name}!</span>)

	}
})


var properties = {
	name:'Dimos',
	music: 'trance'
}

var coursesElement = <Courses {...properties}/>

React.render(coursesElement, document.getElementById('container'))