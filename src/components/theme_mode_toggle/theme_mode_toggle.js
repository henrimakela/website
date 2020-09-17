import React, { Component } from "react";
import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  margin-left: 8px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

/*
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
*/

class ThemeModeToggle extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <Label>
        <img
          checked={this.props.theme == "dark"}
          onClick={this.props.onChange}
          type="checkbox"
          src={
            this.props.theme == "dark"
              ? "images/light_mode.svg"
              : "images/dark_mode.svg"
          }
        />
        <Input
          checked={this.props.theme == "dark"}
          onClick={this.props.onChange}
          type="checkbox"
        ></Input>
      </Label>
    );
  }
}

export default ThemeModeToggle;
