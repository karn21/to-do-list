import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { items, clearList, handleEdit, handleDelete } = this.props;
    return (
      <div>
        <h3 className="text-capitalize mt-5 mb-3 text-center">Todo List</h3>
        <div className="row">
          <div className="col-10 col-md-8 offset-1 offset-md-2">
            {items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  task={item.task}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                ></TodoItem>
              );
            })}
            <button
              className="btn btn-block btn-danger"
              type="button"
              onClick={clearList}
            >
              Clear List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
