import React, { Component } from "react";
import { fetchPet, updatePet } from "../../utils";
import DogForm from "./dogForm";

class EditDog extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchPet("dogs", id).then(response => {
      this.setState({
        name: response.name,
        description: response.description
      });
    });
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = () => {
    const { name } = this.state;
    const { description } = this.state;
    const { history, match } = this.props;
    updatePet("dogs", match.params.id , name, description).then(
      response => {
        history.push(`/dogs/${response.id}`);
      }
    );
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
          onNameChange={this.handleNameChange}
          onDescriptionChange={this.handleDescriptionChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default EditDog;
