import React, { Component } from "react";
import { fetchPet, updatePet } from "../../utils";
import CatForm from "./catForm";

class EditCat extends Component {
  constructor(props) {
    super(props);
    this.state = { name: null, description: null };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchPet("cats", id).then(response => {
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
    updatePet("cats", name, description, { id: match.params.id }).then(
      response => {
        history.push(`/cats/${response.id}`);
      }
    );
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
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default EditCat;
