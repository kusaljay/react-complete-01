import React from 'react';

class App extends React.Component {
  state = {
    userInput: []
  }

  charCountListener = (event) => {
    const charCount = [...this.state.userInput];
    charCount.push(...event.target.value);
    console.log(charCount);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.charCountListener} />
      </div>
    );
  }
}

export default App;