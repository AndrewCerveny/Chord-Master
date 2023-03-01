import React,{Component} from "react";
import Form from "../Form/Form";
import './NoteSpec.css'
import {getMusicNotes} from '../../apicalls/apicalls'

class NoteSpec extends Component {
 constructor(props) {
  super(props)
  this.state = {
    chordSelect : '',
    error: '',
    baseNoteI:this.props.name,
    baseNoteD:'',
    chordSelections:[],
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
 handleSubmit= (data) => {
  console.log(data);
 }
  
}


render() {
  
  return(
    <section className="card-view">
      <h2>{this.state.baseNoteD}</h2>
      <Form note={this.state.baseNoteI} chordSelections={this.state.chordSelections} handleSubmit={this.handleSubmit}/>
      <p> Notes here </p>
      <p> intervals here </p>
      <button> Check piano </button>
    </section>
  )
}
}
export default NoteSpec;