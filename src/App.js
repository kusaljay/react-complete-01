import React from 'react';
import Radium, {StyleRoot} from 'radium';
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
    const styleBtn = {
      backgroundColor: 'rgb(72, 133, 237)',
      font: 'inherit',
      color: 'white',
      border: 'none',
      padding: '8px 10px',
      cursor: 'pointer',
      borderRadius: '3px', 
      ':hover': {
        backgroundColor: 'rgb(31, 107, 236)'
      }
    }

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
        </div> );

      styleBtn.backgroundColor = 'rgb(15, 157, 88)';
      styleBtn[':hover'] = {
        backgroundColor: 'rgb(11, 123, 69)'
      }
    }

    let classes = [];
    const personsLength = this.state.persons.length;

    if(personsLength <= 2) {
      classes.push('alert');
      if(personsLength <= 1) {
        classes.push('warn');
      }
      
      classes = classes.join(' ');
    }

    return (
      <StyleRoot>
        <div className="App">
          <button style={styleBtn} onClick={this.togglePanelHandler}>Toggle Persons</button>
          <p className={classes}>List of Persons</p>
          {personsWrap}
        </div>
      </StyleRoot> 
    );
  }
}

export default Radium(App);