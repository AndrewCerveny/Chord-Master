import React from "react";
import './NoteIntro.css'; 
import { Link } from "react-router-dom";

const NoteIntro = ({name,key, handleSelection}) => {
  
  return(
     <section className="note-card"  >
      <Link className='link'to={`/root${name}`}>
      <h2>{name}</h2>
      </Link>
    </section>
  )
  
}
export default NoteIntro;

