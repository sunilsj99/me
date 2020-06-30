import React from "react";
import Base from "../core/Base";
const Workex = () => {
  return (
    <div>
      <Base>
        <div className="experience mt-4">
          <div className="row heading">
            <div className="col-md-5">
              <h3>Traction on Demand</h3>
              <p className="lead">Salesforce Developer Intern</p>
            </div>
            <div className="col-md-4 offset-md-3 text-right">
              <p className="lead">Jaipur</p>
              <p className="lead">Jan 2020 - May 2020</p>
            </div>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span> Completed "Traction
              Success Path" which is a Industry level Training for Salesforce
              Development.
            </li>
            <li>
              <span className="bullet">&#8226;</span> Worked on Admin Modules
              and custom salesforce development.
            </li>
          </ul>
        </div>
        <br />
        <div className="experience mt-5">
          <div className="row heading">
            <div className="col-md-5">
              <h3>MTX Group Inc.</h3>
              <p className="lead">AI Internship</p>
            </div>
            <div className="col-md-4 offset-md-3 text-right">
              <p className="lead">Jaipur</p>
              <p className="lead">June 2019 - July 2019</p>
            </div>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span>Worked on a Detection
              system which identies faces, recognise them and give the emotion
              as the output
            </li>
            <li>
              <span className="bullet">&#8226;</span>Used a pre-trained model
              and obtained an accuracy of 98% for emotion detection, and created
              a script to accept input faces from AWS and store the result in
              mognoDB.
            </li>
          </ul>
        </div>
      </Base>
    </div>
  );
};

export default Workex;
