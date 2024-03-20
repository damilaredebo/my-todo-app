import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App'; // Import the TodoApp component from App.js

ReactDOM.render(
  <React.StrictMode>
    <TodoApp /> {/* Render the TodoApp component */}
  </React.StrictMode>,
  document.getElementById('root')
);
