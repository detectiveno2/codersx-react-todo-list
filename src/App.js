import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];
  const reactTodos = todos.map((todo) => <li>{todo}</li>);
  return (
    <div id="root">
      <ul>{reactTodos}</ul>
    </div>
  );
}

export default App;
