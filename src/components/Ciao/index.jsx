import { Component } from "react";

class Ciao extends Component {
    constructor(props){
        super(props);
        this.state = {isHi:true}
        // this.state = {sayWord:'bye'}
    }
    handlerBtn = ()=>{
        this.setState({isHi: !this.state.isHi})
    }
  render() {
    const { username, photo} = this.props;
    const {isHi} = this.state;
    const sayWord = isHi ? 'Bye':'Hi';

    const ciaoWord = isHi ? 'Hi':'Bye';
    return (
      <h2>
        {ciaoWord} {username}!
        <img src={photo} alt={username} />
        <button onClick={this.handlerBtn}>Say {sayWord}</button>
      </h2>
    );
  }
}
export default Ciao;
