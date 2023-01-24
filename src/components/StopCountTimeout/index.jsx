import React, { Component } from "react";
import styles from "./StopCountTimeout.module.css";

class StopCountTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
  }
  start = () => {
    // if (this.intervalId !== null) {
    //   this.stop();
    // }
    this.intervalId = setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  stop = () => {
    clearTimeout(this.intervalId);
    this.intervalId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  };

  componentDidMount() {
    if (this.intervalId !== null) {
      this.start();
    }
  }
  componentDidUpdate() {}

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { count } = this.state;
    return (
      <div className={styles.container}>
        <h2>count: {count}</h2>
        <button className={styles.btn} onClick={this.start}>
          {" "}
          start{" "}
        </button>
        <button className={styles.btn} onClick={this.stop}>
          {" "}
          stop{" "}
        </button>
        <button className={styles.btn} onClick={this.reset}>
          {" "}
          reset{" "}
        </button>
      </div>
    );
  }
}
export default StopCountTimeout;
