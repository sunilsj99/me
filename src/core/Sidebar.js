import React from "react";
import avatar from "../components/avatar.jpg";
import Menu from "./Menu";
import Social from "./Social";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={avatar}
        alt="avatar"
        className="avatar"
        width="200"
        height="200"
      />
      <div className="intro m-1">
        <h2>Sunil Kumar Jain</h2>
        <p className="lead role">
          A guy who loves to code in python and javascript.
        </p>
        <Menu />
        <Social />
      </div>
    </div>
  );
};

export default Sidebar;
