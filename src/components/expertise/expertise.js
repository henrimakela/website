import React, { Component } from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  margin-top: 100px;

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: auto;
    margin-top: 32px;
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

class Expertise extends Component {
  render() {
    return (
      <ComponentContainer>
        <Content>
          <h1>EXPERTISE</h1>
          <p>
            Here’s some of information about the expertise I have regarding
            software. Mobile application development is what I'm currently most
            comfortable with. I also like UI design.
          </p>
        </Content>

        <Content>
          <h4>MOBILE APPLICATIONS</h4>
          <p>
            Most experience in native Android (both Kotlin and Java) and Flutter
            but also able to develop for iOS with Swift. Can create and design
            modern and secure mobile applications with sleek user interface.
          </p>
        </Content>

        <Content>
          <h4>WEB DEVELOPMENT</h4>
          <p>
            I like web frontend development with React more but I do also have
            some experience in backend development with NodeJS and GraphQl.
          </p>
        </Content>

        <Content>
          <h4>UI DESIGN & USER EXPERIENCE</h4>
          <p>
            I have a decent understanding of what is a good and what is a bad
            user experience. Am able to design modern and good looking user
            interfaces.{" "}
          </p>
        </Content>

        <Content>
          <h4>SOFTWARE ARCHITECTURE</h4>
          <p></p>
        </Content>
        <Content>
          <h4>AGILE METHODOLOGIES</h4>
          <p></p>
        </Content>
      </ComponentContainer>
    );
  }
}

export default Expertise;
