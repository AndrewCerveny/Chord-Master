import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
  <nav className="nav-area">
   <Link to={'/'} className='link'>
   <h1> Chord Master </h1> 
   </Link> 
    <section className="nav-btn-wrapper">
       <Link to={'/'}>
        <button className="nav-btn"> Home </button>
       </Link> 
          <button className="nav-btn"> See Piano</button>
    </section>
  </nav>
  )
}
export default Navbar; 