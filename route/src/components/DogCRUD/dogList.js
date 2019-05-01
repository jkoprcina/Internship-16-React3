import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPets } from "../../utils";

class ListDog extends Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [] };
  }

  componentDidMount() {
    fetchPets("dogs").then(data => {
      this.setState({
        dogs: data
      });
    });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div>
        {dogs.map(dog => (
          <div key={dog.id}>
            <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
          </div>
        ))}
        <Link to={`/dogs/create`}>Add New Dog</Link>
        <Link to={`/main`}><button>Back</button></Link>
      </div>
    );
  }
}

export default ListDog;
