import React, { Component } from "react";

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: window.innerHeight,
      w: window.innerWidth,
    };
  }
  handlerSize = () => {
    this.setState({
      h: window.innerHeight,
      w: window.innerWidth,
    });
  };
//   Подія resizeзапускається, коли перегляд документа (вікно) було змінено.
// Однак resizeподії запускаються лише для window об’єкта (тобто повертаються document.defaultView). Лише обробники, зареєстровані на windowоб’єкті, отримуватимуть resizeподії.
  componentDidMount = () => {
    window.addEventListener("resize", this.handlerSize);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handlerSize);
  };
  render() {
    const { h, w } = this.state;
    return (
      <p>
        height: {h} <br /> width: {w}
      </p>
    );
  }
}

export default WindowSize;
