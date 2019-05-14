import React, { Component } from "react";

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  handleIncrement = () => {
    const number = this.state.timesClicked;
    this.setState({ timesClicked: number + 1 });
  };

  render() {
    return (
      <button onClick={this.handleIncrement}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
