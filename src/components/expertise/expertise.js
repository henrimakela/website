import React, { Component } from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
    width: 100%;
    display: inline-grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    margin-top: 180px;

   

    @media(max-width: 768px){
        height: auto;
        grid-template-columns: auto;
        margin-top: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
`;



const Content = styled.div`
    margin: 32px;
    max-width: 500px;
    
    @media(max-width: 768px){
        width: 90%;
    }

    &>button{
        margin-top: 32px
    }
`;

class Expertise extends Component {
    render() {
        return (
            <ComponentContainer>
                <Content>
                    <h1>EXPERTISE</h1>
                    <p>This site works as my portfolio, blog and also as a hobby project to keep up todate with the modern web technologies and design.</p>
                </Content>

                <Content>
                    <h4>MOBILE APPLICATIONS</h4>                
                    <p>Most experience in native Android (both Kotlin and Java) and Flutter but also able to develop for iOS with Swift. Can create and design modern and secure mobile applications with sleek user interface.</p>                
                </Content>

                <Content>
                    <h4>WEB DEVELOPMENT</h4>                
                    <p>Modern web development both frontend and backend. This site is built with React and Firebase.</p>                
                </Content>

                <Content>
                    <h4>DESIGN & USER EXPERIENCE</h4>

                    <p>Modern web development both frontend and backend. This site is built with React and Firebase.

Modern web development both frontend and backend. This site is built with React and Firebase.
</p>

                </Content>

            </ComponentContainer>
        );
    }
}

export default Expertise;