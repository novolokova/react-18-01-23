import { Component } from "react";
import PropTypes from "prop-types";

class Ciao extends Component {
  /**
   *
   * @param {*} props
   * @param {string} props.username
   */
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  handlerBtn = () => {
    this.setState({ isHi: !this.state.isHi });
  };
  render() {
    const { username } = this.props;
    const { isHi } = this.state;
    const sayWord = isHi ? "Bye" : "Hi";
    const ciaoWord = isHi ? "Hi" : "Bye";
    // if (isHi === false) { - може бути багато варіантів виводу

    return (
      <h2>
        {ciaoWord} {username}!
        <button onClick={this.handlerBtn}>Say {sayWord}</button>
      </h2>
    );
  }
}

Ciao.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Ciao;
