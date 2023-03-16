import React from "react";
import { Link } from "react-router-dom";
import career from "../assets/images/career.svg";
import Wrapper from "../assets/wrappers/Landing";
import Logo from "./Logo";

const Landing = () => {
  return (
    <>
      <div >
        <Logo />
      </div>

      <Wrapper>
        <div className="container">
          <img src={career} alt="career" />

          <div className="info-container">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Track job searching progress, specifying the job opportunity
              details and always get accurate data about the status of your
              appliations
            </p>
            <span className="btn-cotainer">
              <Link to="/register">Login/Register</Link>
            </span>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
