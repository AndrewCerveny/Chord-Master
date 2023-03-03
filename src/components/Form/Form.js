import React, {Component} from "react";
import './Form.css'
import  {getNoteDetails}  from "../../apicalls/grabData";
import ErrorPage from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types'

class Form extends Component {
 constructor(props) {
  super(props)
  
  this.state = {
    baseNote: this.props.note,
    chordSelect:'',
    error:''
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
  .catch((err) =>this.setState({error:err.message}))
 
}
clearForm = () => {
  this.setState({chordSelect: ''})
}
  
 render() {
  const chordDrop = this.props.chordSelections.map((chord, index) => 
     <option value={chord} key={index}>{chord}</option> 
  )
  if(this.state.error){
    return(
      <ErrorPage message={this.state.error}/>
    )
  }
  return(
    <form className="form">
      <label className="hidden"> Chord Selector </label>
      <input  list="chords" name="chordSelect" placeholder="Select A Chord" onChange={(e) => this.handleChange(e)}/>
      <datalist id='chords'>
       {chordDrop}
      </datalist>
      {!this.state.chordSelect
      ? <button className="form-btn" disabled > Submit </button>
      :<button className="form-btn" onClick={(e) => this.handleSubmitClick(e)}> Submit </button>
      }
      <button className="form-btn" onClick={(e)=> this.clearForm(e)}> Clear </button>
    </form>
  )
 }
}
export default Form; 

Form.propTypes = {
  note: PropTypes.string.isRequired,
  chordSelections: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

