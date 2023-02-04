import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import Error from '../Error';

class DataLoader extends Component {// завантаження будь яких данних, розумний компонетн
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isPending: false,
    };
  }

  load = () => {
    const { loadData } = this.props;
    this.setState({ isPending: true });
    loadData()// шлях fetch змінюється
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };
  componentDidMount() {
    this.load();
  }

  render() { // різне відображення render
    //const { render } = this.props; // 1 варіант  дістаємо render- це функція приймає стан і повертає розмітку для певного компонента
    const { children } = this.props; //  2 варіант дістаємо children- це функція приймає стан і повертає розмітку для певного компонента
    const { error, isPending } = this.state;
    if(isPending){return <Spinner />}
    if(error){return <Error />}
    //return render(this.state); // передаємо поточний стан
    return children(this.state);
  }
}

DataLoader.propTypes = {
  loadData: PropTypes.func.isRequired,
  //render: PropTypes.func.isRequired,
};

export default DataLoader;