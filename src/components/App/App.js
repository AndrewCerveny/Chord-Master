import React,{Component} from 'react';
import './App.css';
import Display from '../Display/Display';
import Navbar from '../Navbar/Navbar';
import { Route,Switch } from 'react-router-dom';
import NoteSpec from '../NoteSpec/NoteSpec'
import { getBaseNotes } from '../../apicalls/grabData';
import rootNotes from '../../mockdata/allRoots';
import Piano from '../Piano/Piano';



class App extends Component {
  constructor() {
    super()
    this.state = {
      allRootNotes:[],
      selectedCard: ''
    }
  }
  componentDidMount = () => {
    getBaseNotes()
      .then((data) => {
        // const rootNotes = Object.keys(data);
        this.setState({allRootNotes:rootNotes}) 
      })
  }
  
  
  render() {
    return (
      <main className="App">
        <Navbar/>
        <Switch>  
          <Route exact path="/" render={()=> <Display allNotes={this.state.allRootNotes} />}/>
          <Route exact path='/Root/:baseNote' render={({match}) => {
           let lowerName = match.params.baseNote
          return <NoteSpec name={lowerName.toLowerCase()} />  
        }} />
        <Route exact path="/piano" render={() => <Piano/>}/>
         
            
        </Switch>
      </main>
    );
  }
}

export default App;
