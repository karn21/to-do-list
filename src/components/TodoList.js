import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoItem></TodoItem>
      </div>
    );
  }
}

export default TodoList;
