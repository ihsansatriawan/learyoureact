import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
  	var todos = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
          	{todos}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {checked: false};
	}

	handlechange(e) {
		this.setState({checked: e.target.checked});
	}


  render() {
  	var rowStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
  	return (
  		<tr style={rowStyle}>
  			<td style={style.tableContent}>
  				<input type="checkbox" checked={this.state.checked} onChange={this.handlechange} />
  			</td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
  	);
  }
}

Todo.propTypes = {
	title: React.PropTypes.string.isRequired
}



class TodoForm extends React.Component {
	render() {
		return (
			<div className="todoForm">
		    I am a TodoForm.
		  </div>
		);	
	}
}

let style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: "1px solid black"
    }
}

