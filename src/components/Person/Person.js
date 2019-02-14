import React, { Component } from 'react';
import styles from './Person.module.scss'

class Person extends Component {
  render() {
    console.log('[Person.js] is rendering');
    return (
      <div className={styles.person}>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
        <p onClick={this.props.clickDelete}>I'm {this.props.name} {this.props.surname} and {this.props.age} years old.</p>
      </div>
    );
  }
}

export default Person;