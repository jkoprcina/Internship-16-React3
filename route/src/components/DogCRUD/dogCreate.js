import React, { Component } from "react";
import { savePet } from "../../utils";
import DogForm from "./dogForm";

class AddDog extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
  }

  handleNameInput = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionInput = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = () => {
    const { name } = this.state;
    const { description } = this.state;
    const { history } = this.props;
    if(name !== "" && description !== ""){
      savePet("dogs", name, description).then(response => {
        history.push(`/dogs/${response.id}`);
      });
    }
    else{
      alert("You need to enter both fields");
    }
  };

  render() {
    const { name } = this.state;
    const { description } = this.state;
    return (
      <>
        <h1>Add a dog</h1>
        <DogForm
          name={name}
          description={description}
          onNameChange={this.handleNameInput}
          onDescriptionChange={this.handleDescriptionInput}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default AddDog;
