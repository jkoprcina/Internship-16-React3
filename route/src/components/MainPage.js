import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div>List of Animals</div>
      <Link to={`/cats`}>
        <div>Cats</div>
      </Link>
      <Link to={`/dogs`}>
        <div>Dogs</div>
      </Link>
    </>
  );
}

export default MainPage;
