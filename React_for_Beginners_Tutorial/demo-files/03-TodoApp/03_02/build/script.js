var Todo = React.createClass({
	getInitialState: function () {
		return { editing: false };
	},
	edit: function () {
		this.setState({ editing: true });
	},
	remove: function () {
		this.props.onRemove(this.props.index);
		console.log('removed: ' + this.props.children);
	},
	save: function () {
		var val = this.refs.newValue.value;
		console.log('prev: ' + this.props.children + ' - new: ' + val);
		this.props.onChange(val, this.props.index);
		this.setState({ editing: false });
	},
	todoDisplay: function () {
		return React.createElement(
			'li',
			{ className: 'todo' },
			React.createElement(
				'span',
				{ onClick: this.edit },
				this.props.children
			),
			React.createElement('button', { onClick: this.remove, className: 'btn btn-default btn-sm glyphicon-trash remove pull-right' })
		);
	},
	todoForm: function () {
		return React.createElement(
			'li',
			{ className: 'todo' },
			React.createElement('input', { type: 'text', placeholder: 'edit TODO', defaultValue: this.props.children, ref: 'newValue' }),
			React.createElement('button', { onClick: this.save, className: 'btn btn-default btn-sm glyphicon-floppy-disk remove pull-right' })
		);
	},
	render: function () {
		if (this.state.editing) {
			return this.todoForm();
		} else {
			return this.todoDisplay();
		}
	}

});

var TodoList = React.createClass({
	getInitialState: function () {
		return {
			todos: ['get milk', 'get bread', 'get nutella'],
			text: '',
			placeholder: 'add todo',
			input_style: 'form-control'
		};
	},
	onChange: function (e) {
		this.setState({ text: e.target.value });
	},
	update: function (newValue, i) {
		var arr = this.state.todos;
		arr[i] = newValue;
		this.setState({ todos: arr });
	},
	eachTodo: function (todo, i) {
		return React.createElement(
			Todo,
			{ key: i, index: i, onChange: this.update, onRemove: this.remove },
			todo
		);
	},
	add: function () {
		var arr = this.state.todos;
		var newTodo = this.refs.newTodo.value;
		if (newTodo) {
			console.log('new todo:', newTodo);
			arr.push(newTodo);
			this.setState({ todos: arr,
				text: '',
				placeholder: 'add todo',
				input_style: 'form-control' });
		} else {
			this.setState({ placeholder: 'please a add todo',
				input_style: 'form-control red' });
		}
	},
	remove: function (i) {
		var arr = this.state.todos;
		arr.splice(i, 1);
		console.log('removed todo:', i);
		this.setState({ todos: arr });
	},
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Things to DO'
			),
			React.createElement(
				'div',
				{ className: 'form-inlne' },
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement('input', { ref: 'newTodo', className: this.state.input_style, placeholder: this.state.placeholder, value: this.state.text, onChange: this.onChange }),
					React.createElement(
						'button',
						{ onClick: this.add, className: 'btn btn-default btn-sm' },
						'+'
					)
				)
			),
			React.createElement(
				'ul',
				null,
				this.state.todos.map(this.eachTodo)
			)
		);
	}
});

React.render(React.createElement(TodoList, null), document.getElementById('todo'));