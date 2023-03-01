import React from "react";
import './Display.css';
import NoteIntro from '../NoteIntro/NoteIntro' 

const Display = ({allNotes,handleSelection}) => {
  const allNoteSelections =  allNotes.map((note, index) => 
    <NoteIntro
      name={note}
      key={index}
      handleSelection={handleSelection}
     />
   
  )
   
  return(
    <section className="display">
      {allNoteSelections}
    </section>
  )
}
export default Display; 