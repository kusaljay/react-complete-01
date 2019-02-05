import React from 'react';
import './Person.css'

const Person = (props) => {
  return (
    <div className="Person">
      {/*<input type="text" onChange={props.changed} value={props.name} />*/}
      <p onClick={props.switchName}>I'm {props.name} {props.surname} and {props.age} years old.</p>
    </div>
  );
}

export default Person;
