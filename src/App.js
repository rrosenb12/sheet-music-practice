import React from 'react';
import './App.css';
import Stave from './Test'
import NoteInput from './NoteInput'
// import './Test'

class App extends React.Component {

  state = {
    note: ''
  }

  submitHandler = (note) => {
    this.setState({note: note})
  }

  render() {
    return (
      <div >
        <Stave note={this.state.note === '' ? false : this.state.note}/>
        <NoteInput submitHandler={this.submitHandler}/>
      </div>
    )}
}

export default App;
