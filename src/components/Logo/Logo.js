import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="logoComponent">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img className="slika" src={logo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
