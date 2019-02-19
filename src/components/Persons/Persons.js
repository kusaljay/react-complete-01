import React, { Component } from 'react';
import Person from '../Person/Person'

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] is rendering...');
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