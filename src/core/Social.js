import React from "react";

const Social = () => {
  return (
    <div>
      <div className="row text-left socials">
        <div className="col-md-3">
          <a href="https://github.com/sunilsj99">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://www.linkedin.com/in/sunil-kumar-jain-b75a5612a/">
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://www.facebook.com/sj.sunil.11">
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://twitter.com/Jainsjcs9">
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-3 mt-3">
          <a href="https://drive.google.com/file/d/12wDzo3-qr0QklSMBiK8ueO3dBO1x7TVb/view?usp=sharing">
            <i className="fa fa-file-text fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-3 mt-3">
          <a href="mailto:rpspjjjj@gmail.com">
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <br />
      <div className="text-left" style={{ fontSize: "20px" }}>
        <i className="fa fa-phone" aria-hidden="true">
          &emsp;:&emsp;9001854839
        </i>
        <i className="fa fa-map-marker" aria-hidden="true">
          &emsp;:&emsp; Jaipur, Rajasthan, India
        </i>
      </div>
    </div>
  );
};

export default Social;
