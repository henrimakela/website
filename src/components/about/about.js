import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    line-height: 90%;
    margin-bottom: 0px;

    @media(max-width: 768px) {
        font-size: 32px;
        text-align: center;
    }
`;



const ComponentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 180px;

   

    @media(max-width: 768px){
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
    
    @media(max-width: 768px){
        width: 90%;
    }

    &>button{
        margin-top: 32px
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    &>h4{
        margin-right: 10px;
    }

    @media(max-width: 768px){
        justify-content: center;
    }
`;





class About extends Component {
    render() {
        return (
            <ComponentContainer>
                <Content>
                    <Title>GREETINGS</Title>
                    <p>This site works as my portfolio, blog and also as a hobby project to keep up todate with the modern web technologies and design.</p>
                    <a href="https://henrimakela.fi/portfolio"><button>PORTFOLIO</button></a>
                </Content>

                <Content>
                    <Row>
                        <h4>DOWNLOAD MY CV</h4>
                        <img src="/images/download.svg"/>
                    </Row>
                    
                    <p>This text is here just so I can have two columns of text on this page. That is the only reason. That’s two sentences already. Thats three.</p>                
                </Content>

            </ComponentContainer>
        );
    }
}

export default About;