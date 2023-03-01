import React from "react";
import './Display.css';
import Note from '../../components/Note/Note' 
import { Link } from "react-router-dom";

const Display = ({allNotes}) => {
  const allNoteSelections =  allNotes.map((note, index) => 
    
      <Note
      name={note}
      key={index}
      />
   
  )
   
  return(
    <section className="display">
      {allNoteSelections}
    </section>
  )
}
export default Display; 