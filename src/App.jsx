import React from 'react';
import './App.css';

function notDivideByZero(signInput, zeroInput){
  if((signInput === '/') && (parseInt(zeroInput) === 0)){
    return alert('Nie dziel przez zero Ty... brzydki człowieku.');
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      inputSign: '',
      secondValue: '',
    };
  }


  onButtonClick = () => {
    console.log('Calculate');
  }

  changeFirst = (event) => {
    this.setState({firstValue: event.target.value});
  }
  changeSign = (event) => {
    notDivideByZero(event.target.value, this.state.secondValue);
    this.setState({inputSign: event.target.value});
  }
  changeSecond = (event) => {
    notDivideByZero(this.state.inputSign, event.target.value);
    this.setState({secondValue: event.target.value});
  }


  render() {

    const backgroundColor = '#ccc';

    return (
      <React.Fragment>
        <div style={{backgroundColor, padding: '1em'}}>
          <label htmlFor='FirstNumber'>First number:</label>
          <input value={this.state.inputValue} id='FirstNumber' type='text' onChange={this.changeFirst}/>
          <label htmlFor='Operation'>Operation:</label>
          <input value={this.state.inputValue} id='Operation' type='text' onChange={this.changeSign}/>
          <label htmlFor='SecondNumber'>Second number:</label>
          <input value={this.state.inputValue} id='SecondNumber' type='text' onChange={this.changeSecond}/>
          <button style={{fontSize: '120%'}} onClick={this.onButtonClick}>
            Calculate
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
