import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../../images/pianol.png'

const Navbar = () => {
  return(
  <nav className="nav-area">
   <Link to={'/'} className='link title-link'>
   <div className="title-wrap">
      <img src={logo} alt="drawn grand piano"/>
      <h1 className="title"> Chord Master </h1> 
   </div>
   </Link> 
    <section className="nav-btn-wrapper">
       <Link to={'/'}>
        <button className="nav-btn"> Home </button>
       </Link> 
       <Link to={'/piano'} className='link'>
          <button className="nav-btn"> See Piano</button>
       </Link>
    </section>
  </nav>
  )
}
export default Navbar; 