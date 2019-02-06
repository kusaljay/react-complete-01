import React from 'react';
import Validation from './Validation';

class App extends React.Component {
  state = {
    userInput: []
  }

  charCountListener = (event) => {
    const charCount = [...this.state.userInput];
    charCount.push(event.target.value);

    this.setState({
      userInput: charCount
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.charCountListener} />
        <p>{this.state.userInput.length}</p>
        <Validation charLength={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;