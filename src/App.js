import React, { useState } from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos(todos => [...todos, todo]);
  }
  
  //삭제 기능
  const deleteToggle = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <header>
          <h1>투두리스트</h1>
        </header>

        <Form addTodo={addTodo}/>
        <TodoList 
          todos={todos}
          deleteToggle={deleteToggle}
          setTodos={setTodos}
        /> 
      </div>
    </React.Fragment>
  );
}

export default App;
