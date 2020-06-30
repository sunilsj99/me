import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/others" className="nav-link">
            Others
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
