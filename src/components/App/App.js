import React,{Component} from 'react';
import './App.css';
import Display from '../Display/Display';
import Navbar from '../Navbar/Navbar';
import { Route,Switch } from 'react-router-dom';
import NoteSpec from '../NoteSpec/NoteSpec'
import { getBaseNotes } from '../../apicalls/grabData';
// import rootNotes from '../../mockdata/allRoots';
import Piano from '../Piano/Piano';
import Error from '../ErrorPage/ErrorPage'



class App extends Component {
  constructor() {
    super()
    this.state = {
      allRootNotes:[],
      selectedCard: '',
      error:'',
      isLoading: true,
    }
  }
  componentDidMount = () => {
    getBaseNotes()
      .then((data) => {
        const musicalNotes = Object.keys(data);
        this.setState({allRootNotes:musicalNotes, isLoading:false}) 
      })
      .catch((err) =>  this.setState({error: err.message}))
  }

  handleAllError = ( message ) => {
    this.setState({error:message})

  }
  
  render() {
   
    return (
      <main className="App">
        <Navbar/>
        <Switch>  
          <Route exact path="/" render={()=> <Display allNotes={this.state.allRootNotes} error={this.state.error} />}/>
          <Route exact path='/Root/:baseNote' render={({match}) => {
           let lowerName = match.params.baseNote
          return <NoteSpec name={lowerName.toLowerCase()} handleErr={this.handleAllError} />  
        }} />
          <Route exact path="/piano" render={() => <Piano/>}/>
          <Route exact path="/*"  render={()=> <Error default={this.state.default}/>}/>  
        </Switch>
      </main>
    );
  }
}

export default App;
