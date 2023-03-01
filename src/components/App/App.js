import React,{Component} from 'react';
import './App.css';
import rootSound from '../../mockdata/rootSound';
import Display from '../Display/Display';
import allRoots from '../../mockdata/allRoots'
import Navbar from '../Navbar/Navbar';

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
        <Navbar/>
        <Display allNotes={this.state.allRootNotes}/>
      </main>
    );
  }
}

export default App;
