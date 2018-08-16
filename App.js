import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Ryan', age: 37},
      {name: 'Michelle', age: 57},
      {name: 'Olga', age: 23}
    ],
    otherState: 'some other rando values'
  }
  switchNameHandler = () => {
  //  DONT DO THIS this.state.persons[0].name
    this.setState( {
      persons:[
        {name: 'Ryan awesome', age: 37},
        {name: 'Michelle', age: 57},
        {name: 'Olga', age: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi I am a React App</h1>
      <p1>This is working!!!</p1>
      <button onClick={this.switchNameHandler}>Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are: Making it super nice</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}
//gsui
//testing for initial commit
export default App;
