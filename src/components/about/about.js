import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 100px;

  @media (max-width: 768px) {
    height: auto;
    margin-top: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  margin: 32px;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 90%;
  }

  & > button {
    margin-top: 32px;
  }
`;

const Box = styled.div`
  height: 32px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  & > h4 {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

class About extends Component {
  render() {
    return (
      <ComponentContainer>
        <Content>
          <h1>GREETINGS</h1>
          <p>
            This site works as my portfolio, blog and also as a hobby project to
            keep up to date with the modern web technologies and design.
          </p>
          <Box></Box>
          <a href="https://henrimakela.fi/portfolio">
            <button>PORTFOLIO</button>
          </a>
        </Content>

        <Content>
          <Row>
            <h4>DOWNLOAD MY CV</h4>
            <img src="/images/download.svg" />
          </Row>

          <p>
            The site is currently under construction and having a UI facelift,
            so there is a possibility that some content might be missing and or
            some things are not working.
          </p>
        </Content>
      </ComponentContainer>
    );
  }
}

export default About;
