import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CatForm extends Component {
  handleCancel = () => {
    const { history } = this.props;
    history.push(`/cats`);
  };

  render() {
    const {
      name,
      description,
      onNameChange,
      onDescriptionChange,
      onSubmit
    } = this.props;
    return (
      <div>
        Name:
        <input value={name} onChange={onNameChange} />
        <br />
        Description:
        <input value={description} onChange={onDescriptionChange} />
        <br />
        <button onClick={onSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(CatForm);
