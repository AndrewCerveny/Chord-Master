import React,{Component} from "react";
import './Note.css'; 
import Form from "../Form/Form";

class Note extends Component {
  constructor(props){
    super(props)
    this.state = {
      chordType: '',
      notes: [],
      intervals: []
    }
  }

  render() {
    return(
      <section className="note-card">
        <h2>{this.props.name}</h2>
        <p></p>
      </section>
    )
  }
}
export default Note;

