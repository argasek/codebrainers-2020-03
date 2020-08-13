import React from 'react';
import './App.css';
import InputNumberField from './components/inputNumberField';
import InputOperatorField from './components/inputOperatorField';
import { calculate } from './services/mathService';


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
      result: '',
      errorMessage: ''
    };
  }

  setField = (event, key) => {
    this.setState({ [key]: event.target.value });
  };

  setErrorMessageIfNaN(value, errorMessage) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      this.setState({ errorMessage });
      return true;
    }
    return false;
  }

  isDivisionByZero(operator, value) {
    if (operator !== '/') {
      return false;
    }
    return value === 0;
  }

  performCalculations = () => {
    const { firstNumber, secondNumber, operator } = this.state;

    if (this.setErrorMessageIfNaN(firstNumber, 'First field value is not a number!')) {
      return;
    }

    if (this.setErrorMessageIfNaN(secondNumber, 'Second field value is not a number!')) {
      return;
    }

    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    if (this.isDivisionByZero(operator, b)) {
      const errorMessage = 'Division by 0 is not allowed';
      this.setState({ errorMessage });
      return;
    }

    const result = calculate(a, b, operator);
    this.setState({ result });
  };

  render() {
    const {
      errorMessage,
      firstNumber,
      secondNumber,
      operator,
      result
    } = this.state;

    console.log(typeof firstNumber);

    return (
      <>
        <InputNumberField
          onChange={event => this.setField(event, 'firstNumber')}
          value={firstNumber}
        />
        {/*{*/}
        {/*  firstNumber !== '' && isNaN(firstNumber) &&*/}
        {/*  <p>*/}
        {/*    This is not a correct value: {firstNumber}*/}
        {/*  </p>*/}
        {/*}*/}
        <InputOperatorField
          onChange={event => this.setField(event, 'operator')}
          value={operator}
        />
        <InputNumberField
          onChange={event => this.setField(event, 'secondNumber')}
          value={secondNumber}
        />
        <p>=</p>
        <p>{ result }</p>
        { errorMessage !== '' &&
          <p>{ errorMessage }</p>
        }
        <button onClick={ this.performCalculations }>Calculate</button>
      </>
    );
  }

}


export default App;
