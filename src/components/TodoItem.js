import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { task, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6 className="text-capitalize">{task}</h6>
        <div className="todo-icon">
          <span className="mx-2" onClick={handleEdit}>
            <i className="fas fa-pen text-success"></i>
          </span>
          <span className="mx-2" onClick={handleDelete}>
            <i className="fas fa-trash text-danger"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
