import React, {Component} from "react";
import './Form.css'

class Form extends Component {
 constructor() {
  super()
  this.state ={
    chordType: ''
  }
 }
 render(){
  return(
    <form>
      <label> Chord Selector </label>
      <input  list="chords" name="chordSelects"/>
      <datalist>
        <option value="m"></option>
      </datalist>
     


    </form>
  )
 }
}
export default Form; 

