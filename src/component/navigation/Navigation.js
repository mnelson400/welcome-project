import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/clock">Clock</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contact</Link>{" "}
        </li>
        {/* <li>
          <Link to="/stopwatch">Timer</Link>{" "}
        </li>
        <li>
          <Link to="/meme">Meme Generator</Link>{" "}
        </li> */}
      </ul>
    </div>
  );
}

export default Navigation;
