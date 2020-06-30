import React from "react";
import Base from "../core/Base";
const Projects = () => {
  return (
    <div>
      <Base>
        <div className="experience mt-4">
          <div className="proj-title">
            <h3>Task Manager System</h3>
            <p className="lead">Stack : Node.js, MongoDB, Heroku, JWT</p>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span> The Project aims at
              managing users and their tasks effectively.
            </li>
            <li>
              <span className="bullet">&#8226;</span> Used Node.js as backend
              and MongoDB for database. A authorized Login and Sign up system
              using JWT with task creation and managing them. Email alerts also
              used to keep user more connected.
            </li>
            <li>
              <span className="bullet">&#8226; </span>deployed as backend api's
              on heroku server.
            </li>
          </ul>
          <ul className="proj-buttons">
            <li>
              <a
                href="https://github.com/sunilsj99/task-manager-node"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-code">View Code</button>
              </a>
            </li>
          </ul>
        </div>
        <div className="experience mt-4">
          <div className="proj-title">
            <h3>Clima - Weather Application</h3>
            <p className="lead">Stack : Node.js, Handlebars, Heroku</p>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span> The Project aims at
              showing weather data according to searched city.
            </li>
            <li>
              <span className="bullet">&#8226;</span> Used weatherstack.com and
              mapbox.com api to fetch data. Node.js is used as backend along
              with handlebars as templating engine to present the data.
            </li>
          </ul>
          <ul className="proj-buttons">
            <li>
              <a
                href="https://github.com/sunilsj99/weather-node"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-code">View Code</button>
              </a>
            </li>
            <li>
              <a
                href="https://clima-weather-sunil.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-code">Go Live</button>
              </a>
            </li>
          </ul>
        </div>
        <div className="experience mt-4">
          <div className="proj-title">
            <h3>Sarcasm Detection in News Headlines</h3>
            <p className="lead">Stack : Python, Flask, NLP, Heroku</p>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span> This project aims at
              detecting Sarcasm in the News headlines using Natural Language
              Processing.
            </li>
            <li>
              <span className="bullet">&#8226;</span>Preprocessing the text data
              using Spacy and building a ask application out of it. Deployed the
              Flask application on the Heroku as service. Achieved an accuracy
              of 93% on the validation set.
            </li>
          </ul>
          <ul className="proj-buttons">
            <li>
              <a
                href="https://github.com/sunilsj99/Sarcasm-detection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-code">View Code</button>
              </a>
            </li>
            <li>
              <a
                href="https://sarcasm-detection.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-code">Go Live</button>
              </a>
            </li>
          </ul>
        </div>
      </Base>
    </div>
  );
};

export default Projects;
