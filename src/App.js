import React, {Component} from 'react';

class App extends Component {
  state = {
    userInputString: []
  }

  countTxtLengthHandler = () => {
    //const userInput = event.target.value;
    console.log('Text inputted');
 
    //return userInput.length;
  }
  
  
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.countTxtLengthHandler} value="Placeholding text" />
        <p></p>

      </div>
    );
  }


}

export default App;