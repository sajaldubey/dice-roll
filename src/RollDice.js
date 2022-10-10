import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  state = {
    die1: "one",
    die2: "two",
    isRolling: false,
  };

  roll = () => {
    const faceOne =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const faceTwo =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({
      die1: faceOne,
      die2: faceTwo,
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Click Me"}
        </button>
      </div>
    );
  }
}

export default RollDice;
