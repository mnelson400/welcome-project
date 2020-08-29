// Project from https://stackoverflow.com

import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopWatch: 0,
    };
    this.decrementer = null;
  }

  componentWillMount() {
    this.startTimer(this.props.timer);
  }

  startTimer(timer) {
    let stopWatch = timer;
    console.log(stopWatch);

    this.decrementer = setInterval(
      () =>
        this.setState({
          stopWatch: this.state.stopWatch + 1,
        }),
      1000
    );
  }

  render() {
    return (
      <div>
        <div>
          You have been on this page for {this.state.stopWatch} seconds.
        </div>
      </div>
    );
  }
}

export default Timer;
