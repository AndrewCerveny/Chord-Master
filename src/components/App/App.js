import React,{Component} from 'react';
import './App.css';
import rootSound from '../../mockdata/rootSound';
import Display from '../Display/Display';
import allRoots from '../../mockdata/allRoots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allRootNotes:[]
    }
  }
  componentDidMount = () => {
   const rootNotes = Object.keys(rootSound);
    this.setState({allRootNotes:allRoots})
  }
  
  render() {
    return (
      <main className="App">
        <h1>Chord Master </h1>
        <Display allNotes={this.state.allRootNotes}/>
      </main>
    );
  }
}

export default App;
