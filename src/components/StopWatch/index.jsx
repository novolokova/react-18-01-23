import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   count: 0,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    // this.start();-not!!!
    this.intervalId = null;
  }
  tisk = () => {
    const { time } = this.state;
    const newTime = new Date(time);
    newTime.setSeconds(newTime.getSeconds() + 1);
    this.setState({ time: newTime });
    // this.setState((state, props) => { //- примусово впершу чургу, не завжди використовувати
    //     const { time } = this.state;
    //     const newTime = new Date(time);
    //     newTime.setSeconds(newTime.getSeconds() + 1);
    //   return { time: newTime };
    // });
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
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    // для побочних ефектів
    // this.start();
  }
  componentDidUpdate() {} // життя нашого
  componentWillUnmount() {
    //для очистки побочних ефектів
    this.stop();
  }
  render() {
    // const { count} = this.state;
    const { time } = this.state;
    // this.start();-not!!!
    return (
      <div>
        {/* <h2>count: {count}</h2> */}
        <h2>time: {time.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default StopWatch;
