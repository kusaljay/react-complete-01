import React from 'react';
import styles from './Person.module.scss'

const person = (props) => {

  return (
    <div className={styles.person}>
      <input type="text" onChange={props.changed} value={props.name} />
      <p onClick={props.clickDelete}>I'm {props.name} {props.surname} and {props.age} years old.</p>
    </div>
  );
}

export default person;