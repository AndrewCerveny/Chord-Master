import React from "react";
import './Display.css';
import NoteIntro from '../NoteIntro/NoteIntro' 

const Display = ({allNotes, error}) => {
  const allNoteSelections =  allNotes.map((note, index) => 
    <div key={index} className ='note-card'>
      <NoteIntro
        name={note}
      />
    </div>
  )
   
  return(
    <section className="display">
     { error
      ? <h2 className="error-message2">{error}</h2>
      : allNoteSelections
     }
    </section>
  )
}
export default Display; 