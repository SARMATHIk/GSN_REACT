import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      {/* <div className="intro"> */}
      <div className="video-container">
      <video autoPlay loop muted playsInline>
          <source src="/img/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Join GSN Today
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};
