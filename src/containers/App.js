import React from 'react';
// import Radium, {StyleRoot} from 'radium';
import PageHeader from '../components/PageHeader/PageHeader';
import Persons from '../components/Persons/Persons';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {id: 111, firstName: 'Kus', age: 38},
        {id: 222, firstName: 'Sha', age: 37},
        {id: 333, firstName: 'Ran', age: 5},
        {id: 444, firstName: 'Ken', age: 0}
      ],
      lastName: 'Fernando',
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    
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
    console.log('[App.js] render method');
    let personsWrap = null;

    if(this.state.showPersons) {
      personsWrap = (
        <div>
          <Persons 
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            nameChanged={this.nameChangedHandler} />
        </div> );
    }

    return (
        <div className="App">
          <PageHeader 
            persons={this.state.persons}
            toggle={this.togglePanelHandler}
            title={this.props.appTitle} />
          {personsWrap}
        </div>
      
    );
  }
}

export default App;