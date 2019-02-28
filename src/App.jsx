import React, { Component } from 'react';
import Todo from './Todos'
import AddTodo from './AddTodo'
import './App.css';

class App extends Component {
  state={
    todos: [
    ],
  }
  
  
    componentDidMount() {
      let url = 'http://localhost:3000/todos';
      fetch(url)
      .then(resp => resp.json())
       .then(data => this.setState({todos:data})
        )
        
      }
  
 
  

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
    let url = 'http://localhost:3000/todos' +'/' + id
    fetch(url, {
      method : 'DELETE' }).then(res => res.json().then(json => {return json}))

  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo]
    this.setState({ todos })

    let url = 'http://localhost:3000/todos'
    let data = todo 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) }
    ).then(res => res.json()).then(response => console.log('succes', data)).catch(error => console.error('error:', error))
  }

  updateTodo = (id) => {
    const todo = this.state.todos.find(todo => todo.id === id)
    todo.content = prompt('Content', todo.content)
    this.setState({ todo })
    let url = 'http://localhost:3000/todos' +'/' + id
    let data = todo 
    fetch(url, {
      method : 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)}).then(res => res.json()).then(response => console.log('succes', data)).catch(error => console.error('error:', error))
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App
