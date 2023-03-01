import React,{Component} from 'react';
import './App.css';
import rootSound from '../../mockdata/rootSound';
import Display from '../Display/Display';
import allRoots from '../../mockdata/allRoots'
import Navbar from '../Navbar/Navbar';
import { Route,Switch } from 'react-router-dom';
import NoteSpec from '../NoteSpec/NoteSpec'


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
        <Switch>  
          <Route exact path="/" render={()=> <Display allNotes={this.state.allRootNotes}/>}/>
          <Route exact path='/:baseNote' render={({match})=>
             <NoteSpec name={match.params.baseNote}/>
          }
          />
         
            
        </Switch>
      </main>
    );
  }
}

export default App;
