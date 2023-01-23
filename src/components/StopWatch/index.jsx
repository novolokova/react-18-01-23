import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.start();-not!!!
    this.intervalId = null;
  }
  tisk = () => {
    this.setState({ count: this.state.count + 1 });
  };
  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.tisk, 1000);
    }
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  };
  componentDidMount() {
    // для побочних ефектів
    // this.start(); 
  }
  componentDidUpdate() {}// життя нашого компоненту
  componentWillUnmount() {
    //для очистки побочних ефектів
    this.stop();
  }
  render() {
    const { count } = this.state;
    // this.start();-not!!!
    return (
      <div>
        <h2>count: {count}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default StopWatch;
