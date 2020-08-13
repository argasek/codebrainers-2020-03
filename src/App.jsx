import React from 'react';
import './App.css';
import InputNumberField from './components/inputNumberField';
import InputOperatorField from './components/inputOperatorField';
import { calculate } from './services/mathService';
import Card from 'reactstrap/es/Card';
import CardBody from 'reactstrap/es/CardBody';
import Row from 'reactstrap/es/Row';
import Col from 'reactstrap/es/Col';
import Button from 'reactstrap/es/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      firstNumberValid: '',
      operator: '',
      secondNumber: '',
      secondNumberValid: '',
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

  validateField(key) {
    const value = this.state[key];
    const parsedValue = parseFloat(value);
    const errorMessage = value !== '' && isNaN(parsedValue) ? 'Field value is not a number!' : '';
    this.setState({ [key + 'Valid']: errorMessage });
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
      firstNumberValid,
      secondNumberValid,
      errorMessage,
      firstNumber,
      secondNumber,
      operator,
      result
    } = this.state;

    return (
      <div className="container pt-3">
        <Card>
          <CardBody>
            <Row>
              <Col>
                <InputNumberField
                  onChange={ event => this.setField(event, 'firstNumber') }
                  value={ firstNumber }
                  errorMessage={ firstNumberValid }
                  name="firstName"
                  validate={event => this.validateField('firstNumber')}
                />

              </Col>
              <Col>
                <InputOperatorField
                  onChange={ event => this.setField(event, 'operator') }
                  value={ operator }
                  name="operator"
                />

              </Col>
              <Col>
                <InputNumberField
                  onChange={ event => this.setField(event, 'secondNumber') }
                  errorMessage={ secondNumberValid }
                  value={ secondNumber }
                  name="secondNumber"
                  validate={event => this.validateField('secondNumber')}
                />

              </Col>

            </Row>
            <p>
              =
              { ' ' }
              { result === '' ? '?' : result }
            </p>
            { errorMessage !== '' &&
            <p>{ errorMessage }</p>
            }
            <Button color="primary" onClick={ this.performCalculations }>Calculate</Button>

          </CardBody>
        </Card>
      </div>
    );
  }

}


export default App;
