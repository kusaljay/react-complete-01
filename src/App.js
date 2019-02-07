import React from 'react';
import Validation from './Validation';
import Char from './Char/Char';

class App extends React.Component {
  state = {
    userInput: ''
  }

  charCountListener = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onInput={this.charCountListener} />
        <p>{this.state.userInput.length}</p>
        <Validation charLength={this.state.userInput.length} />
        <Char />
      </div>
    );
  }
}

export default App;