import React, {Component} from "react";
import './Form.css'
import  {getNoteDetails}  from "../../apicalls/grabData";

class Form extends Component {
 constructor(props) {
  super(props)
  
  this.state = {
    baseNote: this.props.note,
    chordSelect: '',
  } 
}

handleChange = (e) => {
 const {name , value} = e.target
 this.setState({[name]:value})
}
handleSubmitClick =(e) => {
  e.preventDefault()
  getNoteDetails(this.state.baseNote,this.state.chordSelect)
  .then((data) => this.props.handleSubmit(data))
 
}
  
 render() {
  const chordDrop = this.props.chordSelections.map((chord, index) => 
     <option value={chord} key={index}>{chord} </option> 
  )
  return(
    <form className="form">
      <label className="hidden"> Chord Selector </label>
      <input  list="chords" name="chordSelect" placeholder="Select A Chord" onChange={(e) => this.handleChange(e)}/>
      <datalist id='chords'>
       {chordDrop}
      </datalist>
      <button className="form-btn" onClick={(e) => this.handleSubmitClick(e)}> Submit </button>
    </form>
  )
 }
}
export default Form; 

