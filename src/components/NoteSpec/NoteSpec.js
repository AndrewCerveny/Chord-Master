import React,{Component} from "react";
import Form from "../Form/Form";
import './NoteSpec.css'
import {getMusicNotes} from '../../apicalls/grabData'

class NoteSpec extends Component {
 constructor(props) {
  super(props)
  this.state = {
    chordName : '',
    error: '',
    baseNoteI:this.props.name,
    baseNoteD:'',
    chordSelections:[],
    notes: [],
    intervals:[]
  }

}

componentDidMount = () => {
  let root;
    const valueBase = this.state.baseNoteI.split('');
  
    if(valueBase[1] ==='s') {
      const baseLetter = valueBase.splice(1);
      valueBase.push('#')
      const sharpName = valueBase.join('');
      const finalSharpName = sharpName.toUpperCase();
      root = finalSharpName
      this.setState({baseNoteD:root})
    }else{
    const letterString = valueBase.join('')
      root = letterString.toUpperCase() 
      this.setState({baseNoteD:root}) 
  }
  getMusicNotes(this.state.baseNoteI)
  .then((data) => {
    const noteFamily = data[root]
    const chordOptions= Object.keys(noteFamily)
    this.setState({chordSelections:chordOptions})
  })
}


 handleSubmit = (noteInfo) => {
  const detailedNote = noteInfo
  const chordName = detailedNote.name
  const notesInChord = detailedNote.notes
  const noteIntervals = detailedNote.intervals 
  this.setState({chordName:chordName,notes:notesInChord,intervals:noteIntervals })
}

render() {
  const notesInKey = this.state.notes.join(', ')
  const intervalNotes = this.state.intervals.join(', ')
  
  
  return(
    <section className="card-view">
      <h2> Root {this.state.baseNoteD}</h2>
      <Form note={this.state.baseNoteI} chordSelections={this.state.chordSelections} handleSubmit={this.handleSubmit}/>
      <div className="display-info">
        <div className="chosen-chord">  
          <h3> Chord Chosen : {this.state.chordName}</h3>
        </div>
        <div className="note-area">
          <p> Notes In Chord: {notesInKey} </p>
          <p> Intervals In Chord Scale:{intervalNotes}</p>
        </div>
      </div>
      <button className="piano-btn"> Piano </button>
    </section>
  )
}
}
export default NoteSpec;