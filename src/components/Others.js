import React from "react";
import Base from "../core/Base";

const Others = () => {
  return (
    <div>
      <Base>
        <div className="experience mt-4">
          <div className="proj-title">
            <h2>Extra Curricular</h2>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span>
              Member of the Web Development Team of the Cybros, LNMIIT.
              Conducted front end development classes and github sessions for
              junior batches.
            </li>
            <li>
              <span className="bullet">&#8226;</span>
              Internshala Student Partner 8.0
            </li>
          </ul>
        </div>
        <div className="experience mt-5">
          <div className="proj-title">
            <h2>Achievements and Courses</h2>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span>
              Successfully completed student journey by salesforce and attended
              India's first TrailheadX (2019) event at bangalore.
            </li>
            <li>
              <span className="bullet">&#8226;</span>
              <a
                href="https://drive.google.com/file/d/1_vTN1fYFWbQgMDvaoZKJN_dXhMyTQt6D/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Complete Node.JS Developer Course (Third Edition)
              </a>
            </li>
            <li>
              <span className="bullet">&#8226;</span>
              <a
                href="https://drive.google.com/file/d/1gOuC0x20dzG2ouyNqGJo_ljt2lixUPDg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modern React with Redux
              </a>
            </li>
          </ul>
        </div>
        <div className="experience mt-5">
          <div className="proj-title">
            <h2>Hobbies</h2>
          </div>
          <ul className="work-done">
            <li>
              <span className="bullet">&#8226;</span>
              PC gaming 💻
            </li>
            <li>
              <span className="bullet">&#8226;</span>
              Cooking 👨‍🍳
            </li>
            <li>
              <span className="bullet">&#8226;</span>
              Watching TV series 📺 and Listening Music 🎶
            </li>
          </ul>
        </div>
      </Base>
    </div>
  );
};
export default Others;
