import React, {Component} from 'react';

class App extends Component {
  state = {
    userInputString: ''
  }

  countTxtLengthHandler = (event) => {
    const userInput = event.target.value;
    this.setState(
      userInput = userInputString 
    );
  }
  
  
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.countTxtLengthHandler} value={this.value} />
        <p>{this.state.userInputString}</p>

      </div>
    );
  }


}

export default App;0