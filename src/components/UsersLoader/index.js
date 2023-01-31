import React, { Component } from "react";
// import PropTypes from "prop-types";
import {getUsers} from "./../../api"

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {// стан нашого promise
      users: [], // fulfilled(data)
      error: null, // reject(error)
      isPanding: true, // panding - очікування
      currentPage: 1,
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
    const { currentPage:page } = this.state;
   getUsers({page})// винесли отримання сторонього ресурсу в окрему функцію
      .then((data) =>
        this.setState({
          users: data.results,
        })
      )
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
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  render() {
    const { users, error, isPanding, currentPage } = this.state;

    if (isPanding) {
      return <div>Loading ...</div>;
    }
    if (error) {
      return <div>Error ...</div>;
    }
    return (
      <section>
        <div>
          <button onClick={this.prevPage}>&#9664;</button>
          <strong>{currentPage}</strong>
          <button onClick={this.nextPage}>&#9654;</button>
        </div>
        <h2>Users: </h2>
        {users.map((user) => (
          <article key={user.login.uuid}>
            <h3>
              {user.name.first} {user.name.last}
            </h3>
          </article>
        ))}
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;
