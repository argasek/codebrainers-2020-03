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
    const result = calculate(firstNumber, secondNumber, operator);
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
