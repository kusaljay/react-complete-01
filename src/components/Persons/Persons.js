import React from 'react';
import Person from '../Person/Person'

const persons = (props) => (
  props.persons.map((person, index) => {
    return (
      <Person 
        name={person.firstName} age={person.age} key={person.id}
        clickDelete={() => props.deletePerson(index)}
        changed={(event) => props.nameChanged(event, person.id)} /> )
    })
);

export default persons;