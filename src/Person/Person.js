import React from 'react';
import Radium from 'radium';
import './Person.module.css'

const person = (props) => {
  const stylePerson = {
    '@media(min-width: 768px)': {
      width: '520px'
    }
  }

  return (
    <div className="Person" style={stylePerson}>
      <input type="text" onChange={props.changed} value={props.name} />
      <p onClick={props.clickDelete}>I'm {props.name} {props.surname} and {props.age} years old.</p>
    </div>
  );
}

export default Radium(person);