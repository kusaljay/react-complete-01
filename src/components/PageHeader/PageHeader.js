import React, { useEffect, Fragment } from 'react';
import styles from './PageHeader.module.scss';
//import Aux from '../../hoc/Auxiliary';

const pageHeader = (props) => {
  
  useEffect(() => {
    console.log('[PageHeader.js] with useEffect');
  });
  
  let classes = [];
  const personsLength = props.persons.length;
    
  if(personsLength <= 2) {
    classes.push('alert');
    if(personsLength <= 1) {
      classes.push('warn');
    }
    
    classes = classes.join(' ');
  }

  return (
    <Fragment>
      <p>{props.title}</p>
      <button className={styles.btn} onClick={props.toggle}>Toggle Persons</button>
      <p className={classes}>List of Persons</p>
    </Fragment>
  );
}

export default pageHeader;