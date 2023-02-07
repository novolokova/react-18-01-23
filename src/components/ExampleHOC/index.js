import React, { Component } from "react";
import Header from "../Header";
import Parent from "../Parent"
import { UserContext, ThemeContext } from "../../contexts";
import Footer from "../Footer";
import { CONSTANTS } from "../../constants";
const { THEMES } = CONSTANTS;

class ExampleHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: { id: 1, firstName: "Brad", lastName: "Pitt" },
          theme: THEMES.LIGHT,
        };
      }
      setTheme = (theme) => this.setState({ theme });
      render() {
        const { user, theme } = this.state;
        return (
          <ThemeContext.Provider value={[theme, this.setTheme]}>
            <UserContext.Provider value={user}>
              <Header />
              <Parent />
              <Footer />
            </UserContext.Provider>
          </ThemeContext.Provider>
        );
      }
    }
export default ExampleHOC;
