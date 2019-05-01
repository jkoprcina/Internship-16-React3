import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPet, deletePet } from "../../utils";

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = { cat: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchPet("cats", id).then(data => {
      this.setState({
        cat: data
      });
    });
  }

  deleteCat = () => {
    const { id } = this.props.match.params;
    const { history } = this.props;
    deletePet("cats", id).then(() => {
      history.push(`/cats`);
    });
  }

  render() {
    const { cat } = this.state;
    return (
      <div>
        <h1>Cat</h1>
        <div>Name: {cat.name}</div>
        <div>Description: {cat.description}</div>
        <Link to={`/cats/edit/${cat.id}`}>Edit</Link>
        <Link to={`/cats`}>Close</Link>
        <button onClick={this.deleteCat}>Delete</button>
      </div>
    );
  }
}

export default Cat;
