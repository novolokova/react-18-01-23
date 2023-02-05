import React, { Component } from 'react';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
          <img src="/logo192.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
      }
    }

export default Cat;
