import React, { Component } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  height: 24px;
  width: 24px;
  min-width: 24px !important;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  justify-content: space-around;

  &:focus {
    outline: none;
  }
`;

const Line = styled.div`
  width: 32px;
  height: 2px;
  background-color: ${({ theme }) => theme.text};
`;

class DrawerToggle extends Component {
  render() {
    return (
      <ToggleButton onClick={this.props.click}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </ToggleButton>
    );
  }
}
export default DrawerToggle;
