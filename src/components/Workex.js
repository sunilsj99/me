import React from "react";
import Base from "../core/Base";
const Workex = () => {
  return (
    <div>
      <Base>
        <h2>
          <strong> Work Experience</strong>
        </h2>
        <hr />
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
        <div className="experience mt-4">
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
        <h2 className="mt-5">
          <strong> Education</strong>
        </h2>
        <hr />
        <div className="experience mt-4">
          <div className="row heading">
            <div className="col-md-8">
              <h4>LNM Institute of Information Technology, Jaipur</h4>
              <p className="lead">
                Bachelor of Technology <br /> Computer Science
              </p>
            </div>
            <div className="col-md-4 text-right">
              <p className="lead">August 2016 - Present</p>
            </div>
          </div>
        </div>
        <div className="experience mt-4">
          <div className="row heading">
            <div className="col-md-8">
              <h4>Saint Soldier Public School, Jaipur</h4>
              <p className="lead">Class XII (Senior Secondary) - CBSE</p>
            </div>
            <div className="col-md-4 text-right">
              <p className="lead">
                July 2014 - May 2015 <br /> Overall Percenatge : 84.8%
              </p>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Workex;
