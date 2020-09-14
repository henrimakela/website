import React, { Component } from "react";
import "./drawer.css";

import { Link } from "react-router-dom";

class Drawer extends Component {
  render() {
    let drawerClasses = "side_drawer";
    if (this.props.show === true) {
      drawerClasses = "side_drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/expertise">EXPERTISE</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Drawer;
