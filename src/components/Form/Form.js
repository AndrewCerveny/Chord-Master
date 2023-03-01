import React, {Component} from "react";
import './Form.css'


class Form extends Component {
 constructor(props) {
  super(props)
  
  this.state = {
    baseNote: this.props.note,
    chordSelect: ''
  } 
}

handleChange = (e) => {
 const {name , value} = e.target
 this.setState({[name]:value})
}

  
 render(){
  return(
    <form>
      <label> Chord Selector </label>
      <input  list="chords" name="chordSelect" onChange={(e) => this.handleChange(e)}/>
      <datalist>
        <option value="m"></option>
      </datalist>
    </form>
  )
 }
}
export default Form; 

