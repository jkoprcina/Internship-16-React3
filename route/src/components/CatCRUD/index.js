import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CatList from "./catList";
import Cat from "./cat";
import CatCreate from "./catCreate";
import CatEdit from "./catEdit";

class ListCat extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cats" render={props => <CatList {...props} />} />
          <Route
            exact
            path="/cats/:id"
            render={props => <Cat {...props} />}
          />
          <Route
            exact
            path="/cats/create"
            render={props => <CatCreate {...props} />}
          />
          <Route
            exact
            path="/cats/edit/:id"
            render={props => <CatEdit {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default ListCat;
