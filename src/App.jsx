import React from 'react';
import './App.css';
import InputNumberField from './components/inputNumberField';
import InputOperatorField from './components/inputOperatorField';
import { calculate } from './services/mathService';

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
      const result = '';
      this.setState({ errorMessage, result });
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
      const result = '';
      this.setState({ errorMessage, result });
      return;
    }

    const result = calculate(a, b, operator);
    const errorMessage = '';
    this.setState({ result, errorMessage });
  };

  render() {
    const {
      errorMessage,
      firstNumber,
      secondNumber,
      operator,
      result
    } = this.state;

    return (
      <>
        <InputNumberField
          onChange={event => this.setField(event, 'firstNumber')}
          value={firstNumber}
        />
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
