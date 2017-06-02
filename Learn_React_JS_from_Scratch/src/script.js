var Courses = React.createClass({
	statics: {
		fooMethod: function(text){
			return text === 'Hi'
		}
	},
	propTypes:{
		favColour: React.PropTypes.string.isRequired
	},
	getInitialState:function(){
		return {currentPhone:'Samsung Galaxy S6 Edge'}
	},
	getDefaultProps:function(){
		return {music:'Rock',
				favColour:'blue'}
	},
	render: function(){
		return (<span className='content' data-fav-music={this.props.music} >
			<p>Hello {this.props.name} &trade;</p>
			<p>Your current device is {this.state.currentPhone}</p>
			</span>)

	}
})


var properties = {
	name:'Dimos',
	music: 'Trance'
}

var coursesElement = <Courses {...properties}/>

var Counter = React.createClass({
	getInitialState: function(){
		return {count:this.props.count}
	},
	componentWillMount: function(){
		console.log('componentWillMount called')
		if(this.props.count === 0){
			this.state.buttonStyle={'color':'red'}
		}
	},
	componentDidMount: function(){
		console.log(ReactDOM.findDOMNode(this))
		//this.increment = setInterval(this.update, 400)
	},
	componentWillUnmount: function(){
		console.log('componentWillUnmount called')
		//clearInterval(this.increment)
	},
	componentWillReceiveProps: function(nextProps) {
			console.log('componentWillReceiveProps called')
	},
	shouldComponentUpdate: function(nextProps,nextState){
		console.log('shouldComponentUpdate called', nextProps, nextState)
		return  nextState.count % 2 === 0 
	},
	componentWillUpdate: function(nextProps,nextState){
		console.log('componentWillUpdate called', nextState, this.state)
		return true
	},
	componentDidUpdate: function(prevProps,prevState){
		console.log('componentDidUpdate called', prevState, this.state)
		return true
	},
	update: function(){
		var clickCount = this.state.count + 1
		this.setState({count:clickCount})
	},
	render: function(){
		console.log('render called', this.state.count)
		return (<p ref='pTag'>Times clicked {this.state.count} <button style={this.state.buttonStyle} onClick={this.update}>update</button></p>)
	}
})

var clickCounterElement = <Counter count={0}/>
window.renderComponent = function(){
	
	ReactDOM.render(clickCounterElement, document.getElementById('container'))	
}

window.unmountComponent = function(){
	ReactDOM.unmountComponentAtNode(document.getElementById('container'))
}

