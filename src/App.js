import React from 'react';
import Validation from './Validation';

class App extends React.Component {
  state = {
    userInput: []
  }

  charCountListener = (event) => {
    event.preventDefault();
    const charCount = [...this.state.userInput];
    charCount.push(event.target.value);
    console.log(charCount);

    this.setState({
      userInput: charCount
    })
  }

  render() {
    return (
      <div>
        <input type="text" onInput={this.charCountListener} />
        <p>{this.state.userInput.length}</p>
        <Validation charLength={this.state.userInput.length} />
      </div>
    );
  }
}

export default App;