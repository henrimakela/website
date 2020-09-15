import React, { Component } from "react";
import PortfolioCard from "./portfolio_card";
import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  margin-top: 100px;

  @media (max-width: 768px) {
    height: auto;
    justify-content: center;
    margin-top: 32px;
    grid-template-columns: auto;
  }
`;

const Box = styled.div`
  height: 8px;
`;

const Column = styled.div`
  margin: 32px;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const EndColumn = styled.div`
  margin: 32px;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }
`;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showApps: true
    };
  }

  displayApps(showapps) {
    this.setState({
      showApps: showapps
    });
  }
  render() {
    return (
      <div>
        <Grid>
          <Column>
            <h1>PORTFOLIO</h1>
            <p>
              I have a lot projects on my Github. Some are real projects, some
              are trash. Most of them mobile related.
            </p>
            <Box></Box>
            <a href="https://github.com/henrimakela">
              <button>GITHUB</button>
            </a>
          </Column>
          <Column>
            <a href="https://play.google.com/store/apps/developer?id=Henrm&hl=en">
              <h4>Google Play</h4>
            </a>
            <p>
              I've published five applications on{" "}
              <a href="https://play.google.com/store/apps/developer?id=Henrm&hl=en">
                Google Play.
              </a>{" "}
              Some of them are built with Flutter, some of them with Kotlin. I
              haven't really marketed them since they're published for the sake
              of finishing a project and learning.
            </p>
          </Column>

          <EndColumn>
            <h4>Other stuff</h4>
            <p>
              <a href="https://blog.boogiesoftware.com/2020/01/web-application-development-with-flutter.html">
                Web application development with Flutter
              </a>
            </p>
            <p>
              <a href="https://blog.boogiesoftware.com/2019/10/mobile-application-development-with.html">
                Mobile application development with Flutter - a Case Study
              </a>
            </p>
          </EndColumn>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
