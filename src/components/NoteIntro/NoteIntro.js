import React from "react";
import './NoteIntro.css'; 
import { Link } from "react-router-dom";

const NoteIntro = ({name,key}) => {
  let nameSort;
  const baseNoteSharp = name.split('')[1]
   
  if(baseNoteSharp === '#') {
    nameSort = `${name} `
  }else{
    nameSort = name
  }
  console.log('test',nameSort);
  return(
     <section className="note-card"  >
      <Link className='link'to={`/Root${nameSort}`}>
      <h2>{name}</h2>
      </Link>
    </section>
  )
  
}
export default NoteIntro;

