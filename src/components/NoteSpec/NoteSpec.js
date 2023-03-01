import React,{Component} from "react";
import Form from "../Form/Form";

class NoteSpec extends Component {
 constructor() {
  super()
  this.state = {
    chordSelect : '',
    error: '',
    baseNote : '',
    chordSelections: [],
  }
}
  render() {
  return(
    <section className="card">
      <h2> Base note here</h2>
      <Form/>
      <p> Notes here </p>
      <p> intervals here </p>
      <button> Check piano </button>
    </section>
  )
  }
}
export default NoteSpec;