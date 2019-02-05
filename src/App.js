import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      {id: 111, firstName: 'Kus', age: 38},
      {id: 222, firstName: 'Sha', age: 37},
      {id: 333, firstName: 'Ran', age: 5},
      {id: 444, firstName: 'Ken', age: 0}
    ],
    lastName: 'Fernando'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {id: 111, firstName: newName, age: 38}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {id: 111, firstName: event.target.value, age: 38}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Person 
        name={this.state.persons[0].firstName} 
        surname={this.state.lastName} age={this.state.persons[0].age} 
        switch={() => this.switchNameHandler('Ferni')}
        changed={this.nameChangedHandler} />
        <input type="text" onChange={this.nameChangedHandler} value={this.state.persons[0].firstName} />
        <button className="style-btn" onClick={this.switchNameHandler.bind(this, 'Jay')}>Switch Name</button>
      </div>
    );
  }
}

export default App;