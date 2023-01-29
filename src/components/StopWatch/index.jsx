import React, { Component } from "react";
import { format, add, addSeconds } from "date-fns";
import styles from "./StopWatch.module.scss";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    // this.start();-not!!! Warning
    this.intervalId = null;
  }
  tick = () => {
    this.setState((state, props) => {
      // const { time } = state;
      // const newTime = new Date(time);
      // newTime.setSeconds(newTime.getSeconds() + 1);
      // const newTime = addSeconds(time, 1)

      // return { time: addSeconds(state.time, 1) };
      return { time: add(state.time, { seconds: 1 }) };
    });
  };
  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.tick, 1000);
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
  componentDidUpdate() {
    // console.log('componentDidUpdate')
  } // життя нашого Component
  componentWillUnmount() {
    //для очистки побочних ефектів
    this.stop();
    // console.log('componentWillUnmount')
  }
  render() {
    // const { count} = this.state;
    const { time } = this.state;
    // this.start();-not!!! recursion
    return (
      <article className={styles.container}>
        <h2>{format(time, "HH:mm:ss")}</h2>
        <button className={styles.container__btn} onClick={this.start}>
          start
        </button>
        <button className={styles.container__btn} onClick={this.stop}>
          stop stop stop stop stop
        </button>
        <button className={styles.container__btn} onClick={this.reset}>
          reset
        </button>
      </article>
    );
  }
}

export default StopWatch;
