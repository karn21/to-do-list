import React, { Component } from "react";

export class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary">
                <i className="fas fa-book text-white"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add Todo item"
              name="item"
              onChange={handleChange}
              value={item}
            />
          </div>
          <button
            className="btn-primary btn btn-block mt-4 text-uppercase"
            type="btn"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
