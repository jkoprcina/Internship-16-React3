import React, { Component } from "react";
import { savePet } from "../../utils";
import CatForm from "./catForm";

class AddCat extends Component {
  constructor(props) {
    super(props);
    this.state = { name: null, description: null };
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
    if(name !== null && description !== null){
      savePet("cats", name, description).then(response => {
        history.push(`/cats/${response.id}`);
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
        <h1>Add a cat</h1>
        <CatForm
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

export default AddCat;
