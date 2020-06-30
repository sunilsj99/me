import React from "react";
import Sidebar from "./Sidebar";

const Base = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <Sidebar />
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};
export default Base;
