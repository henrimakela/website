import React, { Component } from 'react';
import "./drawer_toggle.css";

class DrawerToggle extends Component {
    render() {
        return (
            <button className="toggle_button" onClick={this.props.click}>
                <div className="toggle_button_line"></div>
                <div className="toggle_button_line"></div>
                <div className="toggle_button_line"></div>
            </button>
        );
    }
}
export default DrawerToggle;