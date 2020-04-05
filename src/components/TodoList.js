import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { items, clearList, handleEdit, handleDelete } = this.props;
    return (
      <div>
        <h3 className="text-capitalize mt-5 mb-3 text-center">Todo List</h3>
        <ul className="list-group">
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                task={item.task}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              ></TodoItem>
            );
          })}
          <button
            className="btn btn-block btn-danger mt-5"
            type="button"
            onClick={clearList}
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
