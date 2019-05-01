import React, {Component} from "react";
import { Link } from "react-router-dom";
import { fetchPet } from "../../utils";

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = { cat: null };
  }

  componentsDidMount() {
    const { id } = this.props.match.params;
    fetchPet("cats", id).then(data => {
      this.setState({
        cat: data
      });
    });
  }

  render() {
    const { cat } = this.state;
    if (!cat) {
      return null;
    }
    return (
      <div>
        <h1>Cat</h1>
        <div>{cat.name}</div>
        <Link to={`/cats/edit/${cat.id}`}></Link>
      </div>
    );
  }
}

export default Cat;
