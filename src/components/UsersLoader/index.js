import React, { Component } from "react";
// import PropTypes from "prop-types";
import { getUsers } from "./../../api";
import Spinner from "../Spinner";
import Error from "../Error";
import { apiConfig } from "../../configs";
import Users from "./Users";

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
    const { currentPage: page, currentResults: results, currentNat:nat} = this.state;
    getUsers({ page, results, nat }) // винесли отримання сторонього ресурсу в окрему функцію
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
    //щоб не було рекурсивного виклику треба умова
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.currentResults !== this.state.currentResults ||
      prevState.currentNat !== this.state.currentNat
    ) {
      this.load();
    }
  }

  // mapUsers = ({ gender, name, nat, login }) => (
  //   <article key={login.uuid}>
  //     <h3>
  //       {name.first} {name.last}
  //     </h3>
  //     <p>nat: {nat} </p>
  //       <p>gender: {gender}</p>
     
  //   </article>
  // );

  resultHandler = ({ target: { value } }) => {
    this.setState({ currentResults: value });
  };
  natHandler = ({ target: { value } }) =>{
    this.setState({ currentNat: value });
  }

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
        <div>
          <button onClick={this.prevPage}>&#9664;</button>
          <strong>{currentPage}</strong>
          <button onClick={this.nextPage}>&#9654;</button>
          <span> ******</span>
          amount:
          <label>
            <input
              onChange={this.resultHandler}
              name="results"
              type="radio"
              value={3}
              checked={currentResults === "3"}
            />
            3
          </label>
          <label>
            <input
              onChange={this.resultHandler}
              name="results"
              type="radio"
              value={5}
              checked={currentResults === "5"}
            />
            5
          </label>
          <label>
            <input
              onChange={this.resultHandler}
              name="results"
              type="radio"
              value={7}
              checked={currentResults === "7"}
            />
            7
          </label>
          <span> ******</span>
<select name="nat" onChange={this.natHandler} value={currentNat}>
<option value="fr">fr</option>
<option value="gb">gb</option>
<option value="us">us</option>
</select>

        </div>
        <Users users={users}/>

        {/* <h2>Users: </h2> */}
        {/* {users.map(this.mapUsers)} */}
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;


// дз
// винести статтю з юзером в окремий компонент
// промапити масиви NATS та AMOUNTS для відповідних елементів