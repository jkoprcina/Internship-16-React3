import React, { Component } from "react";

class DogForm extends Component {
  handleCancel = () => {
    const {history} = this.props;
    history.push(`/posts`);
  }

  render() {
    const { name, description, onNameChange, onDescriptionChange,onSubmit } = this.props;
    return(
      <div>
        Name:
        <input value={name} onChange={onNameChange} />
        Description:
        <input value={description} onChange={onDescriptionChange} />
        <div onClick={onSubmit}>Submit</div>
        <div onClick={this.handleCancel}>Cancel</div>
      </div>
    )
  }
}

export default DogForm;