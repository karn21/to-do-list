import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import uuid from "react-uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    const item = e.target.value;
    this.setState({
      item: item,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const new_item = { id: this.state.id, task: this.state.item };
    const updatedItems = [...this.state.items, new_item];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
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
          <div className="col-10 col-md-8 offset-1 mt-3">
            <h3 className="text-capitalize text-center">todo Input</h3>
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
