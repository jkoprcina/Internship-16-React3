import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DogList from "./dogList";
import Dog from "./dog";
import DogCreate from "./dogCreate";
import DogEdit from "./dogEdit";

class ListDog extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dogs" render={props => <DogList {...props} />} />
          <Route
            exact
            path="/dogs/create"
            render={props => <DogCreate {...props} />}
          />
          <Route
            exact
            path="/dogs/:id"
            render={props => <Dog {...props} />}
          />
          <Route
            exact
            path="/dogs/edit/:id"
            render={props => <DogEdit {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default ListDog;
