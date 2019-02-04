import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:  [
      { id: '111', name: 'Jay', age: 38 },
      { id: '112', name: 'Sha', age: 37 },
      { id: '113', name: 'Ran', age: 4 },
      { id: '114', name: 'Ken', age: 0 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  /* switchNameHandler = (newName) => {
    this.setState({
      persons:  [
        { id: '11', name: newName, age: 38 },
        { id: '11', name: 'Sha', age: 37 },
        { id: '11', name: 'Ran', age: 5 },
        { id: '11', name: 'Kenul', age: 0 }
      ]
    })
  } */

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({ persons: persons });
  }

  togglePersonsListHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // ES5 way
    const persons = [...this.state.persons]; // Create a copy of persons array using ES6 spread operator
    persons.splice(personIndex, 1); // Apply splice method on the copy made above
    this.setState({persons: persons}) // Update state Immutably
  }

  render() {
    const styleBtn = {
      backgroundColor: '#1a73e8',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '3px'     
    } //Inline styles are scoped in React

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>My hobby is watching movies.</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Jayash!!!')} />
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} /> */}
          {this.state.persons.map((person, index) => {
              return <Person key={person.id} name={person.name} age={person.age} 
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            }
          )}
        </div>
      );
    }

    return (
      <div className="App">
        {/* <button 
          style={styleBtn}
          onClick={() => this.switchNameHandler('Jayashanka!!!')} >Switch name</button> */}
        <button style={styleBtn} onClick={this.togglePersonsListHandler}>Toggle Persons</button>
        {/* { this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}>My hobby is watching movies.</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Jayash!!!')} />
            <Person 
              name={this.state.persons[3].name} 
              age={this.state.persons[3].age} />
          </div>: null } */}
          {persons}
      </div>
    );

  
    /*
    return React.createElement('div', {classid: '11', Name: 'App'}, React.createElement('h1', null, 'Does it work now?')); // WHat happens behid the scenes of JSX 
    */
  }
}

export default App;
