import React from 'react';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputFirstValue: '',
      inputSecondValue: '',
      inputThirdValue: '',
      score: ''
    };
  }

  onChangeFirst = (event) => {
    this.setState({
      inputFirstValue: parseFloat(event.target.value),
    })
  }

  onChangeSecond = (event) => {
    this.setState({
      inputSecondValue: event.target.value,
    })
  }

  onChangeThird = (event) => {
    this.setState({
      inputThirdValue: parseFloat(event.target.value),
    })
  }

  CalcualteBtn = () => {
    let newScore;
    if (this.state.inputSecondValue === '+' && this.state.inputFirstValue !== "" && typeof this.state.inputFirstValue !== "string"
      && this.state.inputThirdValue !== "" && typeof this.state.inputThirdValue !== "string") {
      newScore = this.state.inputFirstValue + this.state.inputThirdValue;

    } else if (this.state.inputSecondValue === '-' && this.state.inputFirstValue !== "" && typeof this.state.inputFirstValue !== "string"
      && this.state.inputThirdValue !== "" && typeof this.state.inputThirdValue !== "string") {
      newScore = this.state.inputFirstValue - this.state.inputThirdValue;
    } else if (this.state.inputSecondValue === '*' && this.state.inputFirstValue !== "" && typeof this.state.inputFirstValue !== "string"
      && this.state.inputThirdValue !== "" && typeof this.state.inputThirdValue !== "string") {
      newScore = this.state.inputFirstValue * this.state.inputThirdValue;
    } else if (this.state.inputSecondValue === '/' && this.state.inputFirstValue !== "" && typeof this.state.inputFirstValue !== "string"
      && this.state.inputThirdValue !== "" && typeof this.state.inputThirdValue !== "string" && this.state.inputFirstValue !== 0 && this.state.inputThirdValue !== 0) {
      newScore = this.state.inputFirstValue / this.state.inputThirdValue;
    } else {
      newScore = "Value in the inputs are invalid"
    }
    this.setState({
      score: newScore,
      inputFirstValue: '',
      inputSecondValue: '',
      inputThirdValue: '',
    })
  }

  render() {

    return (
      <>
        <input value={this.state.inputFirstValue} placeholder="enter the value" type="text" onChange={this.onChangeFirst} />
        <input value={this.state.inputSecondValue} placeholder="Enter:*,/, +,-" style={{ margin: '0 20px' }} type="text" onChange={this.onChangeSecond} />
        <input value={this.state.inputThirdValue} placeholder="enter the value" type="text" onChange={this.onChangeThird} />
        <p>=</p>
        <p>{this.state.score}</p>
        <button onClick={this.CalcualteBtn}>Calculate</button>
      </>
    )
  }

}


export default App;
