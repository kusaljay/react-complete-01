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
    lastName: 'Fernando',
    showPersons: false
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

  togglePanelHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let personsWrap = null;

    if(this.state.showPersons) {
      personsWrap = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.firstName} age={person.age} surname={this.state.lastName} 
                  /*switchName={() => this.switchNameHandler('Ferni')}
                  changed={this.nameChangedHandler}*/ />
            })
          }
        </div> )
    }

    return (
      <div className="App">
        <input type="text" onChange={this.nameChangedHandler} value={this.state.persons[0].firstName} />
        <button className="style-btn" onClick={this.togglePanelHandler}>Toggle Persons</button>
        {personsWrap}
      </div>
    );
  }
}

export default App;