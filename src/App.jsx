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

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// firstNumber !== "" &&
// typeof firstNumber !== "string" &&
// secondNumber !== "" &&
// typeof secondNumber !== "string"


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
    const { firstNumber, secondNumber, operator } = this.state;

    const operations = {
      '+': add,
      '-': subtract,
      '*': multiply,
      '/': divide,
    };

    const operation = operations[operator];
    const result = operation(firstNumber, secondNumber);

    this.setState({ result });
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
