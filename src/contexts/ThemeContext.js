import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    navLight: "navbar-dark bg-primary",
    navDark: "navbar-dark bg-dark"
  };
  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
