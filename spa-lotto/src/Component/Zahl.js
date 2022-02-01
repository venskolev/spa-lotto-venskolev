import React from "react";
import "./Style.css";

class Zahl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
    };
    this.luckyNum = this.luckyNum.bind(this);
    this.reset = this.reset.bind(this);
  }

  pushNumbers = (counter) => {
    let emptyArr = [];
    let randomGenerator = (num) => {
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
    emptyArr[emptyArr.length] = randomGenerator(10);
    return emptyArr;
  };

  luckyNum() {
    this.setState({
      numbers: this.pushNumbers(6),
    });
  }

  reset() {
    this.setState({
      numbers: [],
    });
  }

  render() {
    return (
      <div className="Lotto">
        <h1>LOTTO 6/49</h1>
        <p>Generating lucky numbers</p>
        <ul className="Zahl">
          {this.state.numbers.map((num, zahl) => {
            return (
              <li key={zahl}>
                <p>{num}</p>
              </li>
            );
          })}
        </ul>
        <div className="Lucky">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
          <button className="generate" onClick={this.luckyNum}>
            Show me lucky numbers
          </button>
        </div>
      </div>
    );
  }
}

export default Zahl;
