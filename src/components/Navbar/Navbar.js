import React from "react";
import './Navbar.css';

const Navbar = () => {
  return(
  <nav>
    <h1>Master Chord </h1>
    <section className="nav-button-wrapper">
      <button className="nav-btn"> Home </button>
      <button className="nav-btn"> See Piano</button>
    </section>
  </nav>
  )
}
export default Navbar; 