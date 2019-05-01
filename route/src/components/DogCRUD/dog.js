import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPet, deletePet } from "../../utils";

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = { dog: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchPet("dogs", id).then(data => {
      this.setState({
        dog: data
      });
    });
  }

  deleteDog = () => {
    const { id } = this.props.match.params;
    const { history } = this.props;
    deletePet("dogs", id).then(() => {
      history.push(`/dogs`);
    });
  };

  render() {
    const { dog } = this.state;
    return (
      <div>
        <h1>dog</h1>
        <div>Name: {dog.name}</div>
        <div>Description: {dog.description}</div>
        <Link to={`/dogs/edit/${dog.id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/dogs`}>
          <button>Close</button>
        </Link>
        <button onClick={this.deleteDog}>Delete</button>
      </div>
    );
  }
}

export default Dog;
