import React from "react";
import './Display.css';
import NoteIntro from '../NoteIntro/NoteIntro' 

const Display = ({allNotes}) => {
  const allNoteSelections =  allNotes.map((note, index) => 
    <div key={index} className ='note-card'>
      <NoteIntro
        name={note}
      />
    </div>
  )
   
  return(
    <section className="display">
      {allNoteSelections}
    </section>
  )
}
export default Display; 