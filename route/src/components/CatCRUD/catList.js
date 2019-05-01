import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPets } from "../../utils";

class ListCat extends Component {
  constructor(props) {
    super(props);
    this.state = { cats: [] };
  }

  componentDidMount() {
    fetchPets("cats").then(data => {
      this.setState({
        cats: data
      });
    });
  }

  render() {
    const { cats } = this.state;
    return (
      <div>
        {cats.map(cat => (
          <div key={cat.id}>
            <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
          </div>
        ))}
        <Link to={`/cats/create`}>Add New Cat</Link>
        <Link to={`/main`}><button>Back</button></Link>
      </div>
    );
  }
}

export default ListCat;
