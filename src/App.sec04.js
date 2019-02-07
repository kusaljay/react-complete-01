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

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId; // returns true
    });
    //console.log(personIndex);

    const personToUpdate = {...this.state.persons[personIndex]};
    //console.log(personToUpdate);

    personToUpdate.firstName = event.target.value;
    //console.log(personToUpdate);

    const personsUpdated = [...this.state.persons];
    //console.log(personsUpdated);

    personsUpdated[personIndex] = personToUpdate;
    //console.log(personsUpdated);
    
    this.setState({persons: personsUpdated})
  }

  togglePanelHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    //const personsAll = this.state.persons.slice(); // Fetch all persons
    const personsAll = [...this.state.persons]; // Create a copy of state to update immutably
    personsAll.splice(personIndex, 1);
    this.setState({persons: personsAll});
  }

  render() {
    let personsWrap = null;

    if(this.state.showPersons) {
      personsWrap = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person name={person.firstName} age={person.age} surname={this.state.lastName} key={person.id}
              clickDelete={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} /> )
            })
          }
        </div> )
    }

    return (
      <div className="App">
        <button className="style-btn" onClick={this.togglePanelHandler}>Toggle Persons</button>
        {personsWrap}
      </div>
    );
  }
}

export default App;