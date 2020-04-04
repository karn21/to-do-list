import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import uuid from "react-uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
  state = {
    items: [{ id: 1, task: "Wake up" }],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = () => {
    console.log("handle Change");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("handle Submit");
  };
  handleEdit = () => {
    console.log("handle Edit");
  };
  handleDelete = () => {
    console.log("handle Delete");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-10 mx-auto mt-3">
            <h3 className="text-capitalize text-center">todo Input</h3>
          </div>
          <div className="col-10 col-md-8 offset-md-2 offset-1">
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            ></TodoInput>
          </div>
        </div>

        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
