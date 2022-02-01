import React from 'react';
import "./Style.css";

class ExtraZahl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };

    this.luckyNum = this.luckyNum.bind(this);
    this.reset = this.reset.bind(this);
  }

  pushNumbers = counter => {
    let emptyArr = [];
    let randomGenerator = num => {
      return parseInt(Math.random() * num + 1);
    };
    while (counter) {
      let randomNum = randomGenerator(49);
      while (emptyArr.indexOf(randomNum) !== -1) {
        randomNum = randomGenerator(49);
      }
      emptyArr.push(randomNum);
      counter--;
    }
    emptyArr[emptyArr.length] = randomGenerator(49);
    return emptyArr;
  };

  luckyNum() {
    this.setState({
      numbers: this.pushNumbers(1)
    });
  }

  reset() {
    this.setState({
      numbers: []
    });
  }

  render() {
    return (
      <div className="lotto-container">
        <ul className="number-container">
          {this.state.numbers.map((num, zahl) => {
            return (
              <li key={zahl}>
                <p>{num}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ExtraZahl;
