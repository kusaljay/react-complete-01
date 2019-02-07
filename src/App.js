import React from 'react';
import Validation from './Validation';
import Char from './Char/Char';

class App extends React.Component {
  state = {
    userInput: '',
    userInputArr: []
  }

  charCountHandler = (event) => {
    const charCount = event.target.value;
    const charCountArr = charCount.split('');
    //console.log(charCountArr);
    this.setState({
      userInput: charCount,
      userInputArr: charCountArr
    })
  }

  deleteCharHandler = (charIndex) => {
    const charsAllArr = [...this.state.userInputArr];
    charsAllArr.splice(charIndex, 1);
    //console.log(charsAllArr);
    const charsAll = charsAllArr.join('');
    //console.log(charsAll);
    this.setState(
      {
        userInputArr: charsAllArr,
        userInput: charsAll
        }
      );
  }

  render() {
    let characterSeries = null;
 
    characterSeries = (
      this.state.userInputArr.map((el, i) => {
        return <Char key={i} text={el} delete={(i) => this.deleteCharHandler(i)} />
      })
    )

    return (
      <div>
        <input type="text" onChange={this.charCountHandler} value={this.state.userInput}  />
        <p>{this.state.userInput}<br />Character count: {this.state.userInput.length}</p>
        <Validation charLength={this.state.userInput.length} />
        {characterSeries}
      </div>
    );
  }
}

export default App;