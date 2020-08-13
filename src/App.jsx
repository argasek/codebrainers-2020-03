import React from 'react';
import './App.css';

const InputNumberField = ({ value, onChange }) => {
  return (
    <input
      value={ value }
      placeholder="enter the value"
      type="text"
      onChange={ onChange }
    />
  )
};

const InputOperatorField = ({ value, onChange }) => {
  return (
    <input
      value={ value }
      placeholder="Enter: *, /, +, -"
      style={ { margin: '0 20px' } }
      type="text"
      onChange={ onChange }
    />
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      operator: '',
      secondNumber: '',
      result: ''
    };
  }

  setFieldAsFloat = (event, key) => {
    this.setState({ [key]: parseFloat(event.target.value) });
  };

  setOperator = (event) => {
    this.setState({ operator: event.target.value });
  };

  performCalculations = () => {
    let newScore;

    if (this.state.operator === '+' && this.state.firstNumber !== "" && typeof this.state.firstNumber !== "string"
      && this.state.secondNumber !== "" && typeof this.state.secondNumber !== "string") {
      newScore = this.state.firstNumber + this.state.secondNumber;

    } else if (this.state.operator === '-' && this.state.firstNumber !== "" && typeof this.state.firstNumber !== "string"
      && this.state.secondNumber !== "" && typeof this.state.secondNumber !== "string") {
      newScore = this.state.firstNumber - this.state.secondNumber;
    } else if (this.state.operator === '*' && this.state.firstNumber !== "" && typeof this.state.firstNumber !== "string"
      && this.state.secondNumber !== "" && typeof this.state.secondNumber !== "string") {
      newScore = this.state.firstNumber * this.state.secondNumber;
    } else if (this.state.operator === '/' && this.state.firstNumber !== "" && typeof this.state.firstNumber !== "string"
      && this.state.secondNumber !== "" && typeof this.state.secondNumber !== "string" && this.state.firstNumber !== 0 && this.state.secondNumber !== 0) {
      newScore = this.state.firstNumber / this.state.secondNumber;
    } else {
      newScore = "Value in the inputs are invalid";
    }
    this.setState({
      score: newScore,
      firstNumber: '',
      operator: '',
      secondNumber: '',
    });
  };

  render() {
    const {
      firstNumber,
      secondNumber,
      operator,
      result
    } = this.state;

    return (
      <>
        <InputNumberField
          onChange={event => this.setFieldAsFloat(event, 'firstNumber')}
          value={firstNumber}
        />
        <InputOperatorField
          onChange={this.setOperator}
          valu={operator}
        />
        <InputNumberField
          onChange={event => this.setFieldAsFloat(event, 'secondNumber')}
          value={secondNumber}
        />
        <p>=</p>
        <p>{ result }</p>
        <button onClick={ this.performCalculations }>Calculate</button>
      </>
    );
  }

}


export default App;
