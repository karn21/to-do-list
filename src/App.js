import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import uuid from "react-uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
  render() {
    return (
      <div>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
