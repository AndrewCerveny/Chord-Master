import React from "react";
import './Display.css';
import NoteIntro from '../NoteIntro/NoteIntro' 
import PropTypes from 'prop-types'

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
      ? <h2 className="error-message">{error}</h2>
      : allNoteSelections
     }
    </section>
  )
}
export default Display; 

Display.propTypes = {
 allNotes:PropTypes.array.isRequired,
 error:PropTypes.string.isRequired 
}