import React, { Component } from "react";
import { getUsers } from "./../../api";
import Spinner from "../Spinner";
import Error from "../Error";
import { apiConfig } from "../../configs";
import Users from "./Users";
import ControlPanel from "./ControlPanel";
import FlexContainer from "../FlexContainer/index";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // стан нашого promise
      users: [], // fulfilled(data)
      error: null, // reject(error)
      isPanding: true, // panding - очікування
      currentPage: 1,
      currentResults: String(apiConfig.DEFAULT_AMOUNT),
      currentNat: apiConfig.DEFAULT_NAT,
    };
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      // робимо функцію коли залежемо від попереднього стану, тобто на основі попереднього стану (який є) міняємо його
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  nextPage = () =>
    this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));

  load = () => {
    const {
      currentPage: page,
      currentResults: results,
      currentNat: nat,
    } = this.state;
    getUsers({ page, results, nat }) // винесли отримання сторонього ресурсу в окрему функцію. Повернувся promise
    // якщо fulfilled(data) то витягує данні та повертає через then данні, якщо помилка(promise у стані reject)обробляємо(error)
      .then((data) => {
        if (data.error) {
          return this.setState({
            error: data,
          });
        }
        return this.setState({
          users: data.results,
          error: null,
        });
      })
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() =>
        this.setState({
          isPanding: false,
        })
      );
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    //щоб не було рекурсивного виклику треба умова, обов'язково
    // prevProps, prevState - парам-ри за замовчуван. парам-ри попереднього стану, ті які були до тих змін які привели до Update нашого стану
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.currentResults !== this.state.currentResults ||
      prevState.currentNat !== this.state.currentNat
    ) {
      this.load();
    }
  }

  resultHandler = ({ target: { value } }) => {
    this.setState({ currentResults: value });
  };

  natHandler = ({ target: { value } }) => {
    this.setState({ currentNat: value });
  };

  render() {
    const { users, error, isPanding, currentPage, currentResults, currentNat } = this.state;
    if (isPanding) {
      return <Spinner />;
    }
    if (error) {
      console.log(error);
      return <Error />;
    }
    return (
      <section>
        <ControlPanel
          currentPage={currentPage}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
          currentResults={currentResults}
          resultHandler={this.resultHandler}
          currentNat={currentNat}
          natHandler={this.natHandler}
        />
        <FlexContainer
          jCont="center"
          alingIt="center"
          flexDir="row"
          flexWr="wrap"
        >
          <Users users={users} />
        </FlexContainer>
      </section>
    );
  }
}

export default UsersLoader;
