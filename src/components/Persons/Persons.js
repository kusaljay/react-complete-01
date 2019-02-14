import React, { Component } from 'react';
import Person from '../Person/Person'

class Persons extends Component {
  render() {
    console.log('[Persons.js] is rendering');
    return (
      this.props.persons.map((person, index) => {
        return (
          <Person 
            name={person.firstName} age={person.age} key={person.id}
            clickDelete={() => this.props.deletePerson(index)}
            changed={(event) => this.props.nameChanged(event, person.id)} /> )
        })
      );
  }
}

export default Persons;