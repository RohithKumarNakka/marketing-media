import React from "react";
import { NavLink } from "react-router-dom";

function Errorpage() {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1> 404 </h1>
          </div>
          <h2> Page not found!</h2>
          <p className="mb-5">
            The page you are looking might have been removed or broken or its
            name is changed or is temporarily unavailable!
          </p>
          <NavLink to="/"> Back to Home Page</NavLink>
        </div>
      </div>
    </>
  );
}

export default Errorpage;
