import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container" style={{ padding: "10px" }}>
      <div className="hstack">
        <Link to="/" className="ml-auto" style={{ color: "#adb5bd", textDecoration:"none" }} ><h1>err03</h1></Link>
        <Link to="/resume" className="ms-auto" style={{ color: "#adb5bd" }} >Resume</Link>
      </div>
    </div>
  );
};

export default Header;
