import React, { Component } from "react";
import cx from "classnames";
import styles from "./SingInForm.module.css";

const initialValues = {
  email: "",
  password: "",
  isemailValid: true,
  ispasswordValid: true,
};

class SingInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  formHandler = (event) => {
    event.preventDefault();
    // console.dir(event.target.email.value);
    event.target.reset();
    this.setState({ ...initialValues });
  };

  inputHandler = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });

  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;
    const emailClasses = cx(styles.input, { [styles.invalid]: !isemailValid });
    const passClasses = cx(styles.input, {
      [styles.invalid]: !ispasswordValid,
    });

    return (
      <form className={styles.form} onSubmit={this.formHandler}>
        <input
          value={email}
          className={emailClasses}
          onChange={this.inputHandler}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          value={password}
          className={passClasses}
          onChange={this.inputHandler}
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          //   className={styles.input}
          type="submit"
          value="send"
        />
      </form>
    );
  }
}

export default SingInForm;
