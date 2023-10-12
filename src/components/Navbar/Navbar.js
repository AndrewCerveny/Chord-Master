import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/pianol.png";
import { FaHome } from "react-icons/fa";
import { BiSolidPiano } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="nav-area">
      <Link to={"/"} className="link title-link">
        <div className="title-wrap">
          <img src={logo} alt="drawn grand piano" className="logo-pic" />
          <h1 className="title"> Chord Master </h1>
        </div>
      </Link>
      <section className="nav-btn-wrapper">
        <Link to={"/"}>
          <button className="nav-btn">
            <FaHome className="home-icon" />
          </button>
        </Link>
        <Link to={"/piano"} className="link">
          <button className="nav-btn">
            <BiSolidPiano className="piano-icon" />
          </button>
        </Link>
      </section>
    </nav>
  );
};
export default Navbar;
