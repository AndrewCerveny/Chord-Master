import React, { Component } from "react";
import Form from "../Form/Form";
import "./NoteSpec.css";
import { getMusicNotes } from "../../apicalls/grabData";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import PropTypes from "prop-types";

class NoteSpec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chordName: "",
      error: "",
      baseNoteI: this.props.name,
      baseNoteD: "",
      chordSelections: [],
      notes: [],
      intervals: [],
      error: "",
    };
  }

  componentDidMount = () => {
    let root;
    const valueBase = this.state.baseNoteI.split("");

    if (valueBase[1] === "s") {
      const baseLetter = valueBase.splice(1);
      valueBase.push("#");
      const sharpName = valueBase.join("");
      const finalSharpName = sharpName.toUpperCase();
      root = finalSharpName;
      this.setState({ baseNoteD: root });
    } else {
      const letterString = valueBase.join("");
      root = letterString.toUpperCase();
      this.setState({ baseNoteD: root });
    }
    getMusicNotes(this.state.baseNoteI)
      .then((data) => {
        const noteFamily = data[root];
        const chordOptions = Object.keys(noteFamily);
        this.setState({ chordSelections: chordOptions });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  handleSubmit = (noteInfo) => {
    const detailedNote = noteInfo;
    const chordName = detailedNote.name;
    const notesInChord = detailedNote.notes;
    const noteIntervals = detailedNote.intervals;
    this.setState({
      chordName: chordName,
      notes: notesInChord,
      intervals: noteIntervals,
    });
  };

  render() {
    const notesInKey = this.state.notes.join(", ");
    const intervalNotes = this.state.intervals.join(", ");
    if (this.state.error) {
      return <ErrorPage message={this.state.error} />;
    }

    return (
      <section className="card-view">
        <h2> Root {this.state.baseNoteD}</h2>
        <Form
          note={this.state.baseNoteI}
          chordSelections={this.state.chordSelections}
          handleSubmit={this.handleSubmit}
        />
        <div className="display-info">
          <div className="chosen-chord">
            <h3> Chord Chosen </h3>
            <h4> {this.state.chordName} </h4>
          </div>
          <div className="note-area">
            <h3> Notes In Chord</h3>
            <div className="key-display-wrap">
              <h4>{notesInKey} </h4>
            </div>
          </div>
          <div className="interval-area">
            <h3>Chord Intervals </h3>
            <div className="key-interval-wrap">
              <h4>{intervalNotes}</h4>
            </div>
          </div>
        </div>
        <Link className="link-btn-wrap" to={"/piano"}>
          <button className="piano-btn"> Piano Compare </button>
        </Link>
      </section>
    );
  }
}
export default NoteSpec;

NoteSpec.propTypes = {
  name: PropTypes.string.isRequired,
};
