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
  handleEdit = (id) => {
    const editItem = this.state.items.filter((item) => item.id === id);
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: updatedItems,
      item: editItem.task,
      editItem: true,
    });
    console.log(`handle Edit ${id}`);
  };
  handleDelete = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: updatedItems,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-capitalize text-center mt-5 mb-2">todo Input</h3>
        <div className="row">
          <div className="col-10 col-md-8 offset-1 offset-md-2">
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            ></TodoInput>
          </div>
          <div className="col-10 col-md-8 offset-1 offset-md-2">
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
