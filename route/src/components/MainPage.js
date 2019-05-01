import React from 'react';
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div>List of Animals</div>
      <Link to={`/cats`}>Cats</Link>
      <Link to={`/dogs`}>Dogs</Link>
    </>
  );
}

export default MainPage;