import { Component } from "react";

class Ciao extends Component {
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
    // if (isHi === false) { - може бути багато варіантів виводу render()
    //   return <p>qwerty</p>
    // }
    return (
      <h2>
        {ciaoWord} {username}!
        <button onClick={this.handlerBtn}>Say {sayWord}</button>
      </h2>
    );
  }
}
export default Ciao;
