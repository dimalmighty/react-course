var courseList = ['Learn ReactJS','Learn AngularJS','Learn NodeJS', 'Learn Fatwire', 'Learn Webpack']

var Courses = React.createClass({
	render: function(){
		return (
				<div>
					Courses on offer:
					<CourseColection list={this.props.list}/>
				</div>
			)
	}
})

var CourseColection = React.createClass({
	
	render: function(){
		return (
				<ul>
					{	
						this.props.list.map(function(courseName, index){
							return <Course key={'key'+index} name={courseName}/> 
						})
					}
				</ul>
			)
	}
})

var Course = React.createClass({
	render:function(){
		return (
				<li>{this.props.name}</li>
			)
	}
})

var coursesElement = <Courses list={courseList}/>
ReactDOM.render(coursesElement, document.getElementById('container'))