import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, navLight, navDark, toggleTheme } = this.context;
    const theme = isLightTheme ? navLight : navDark;
    console.log(theme);
    return (
      <div>
        <nav className={"navbar navbar-expand-lg " + theme}>
          <a className="navbar-brand" href="#">
            BookList Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <div className="my-2">
              <button className="btn btn-outline-light" onClick={toggleTheme}>
                Change Theme
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
