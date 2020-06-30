import React from "react";
import Sidebar from "./Sidebar";

const Base = ({ children }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <Sidebar />
          </div>
          <div className="col-md-8 mt-4">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Base;
