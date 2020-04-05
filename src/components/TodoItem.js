import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { task, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <p>{task}</p>
      </div>
    );
  }
}

export default TodoItem;
