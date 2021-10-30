import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Start.css";
import errorimg from "../Images/error404.png";

function PageNotFound() {
  return (
    <div className="errpage">
      <img src={errorimg}></img>
      <h4>Sorry, we can not find that page</h4>
      <div>
        <Link className="home" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
