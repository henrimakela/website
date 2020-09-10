import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 72px;
    font-weight: 800;
    line-height: 90%;
    margin-bottom: 0px;

    @media(max-width: 768px) {
        font-size: 32px;
        text-align: center;
    }
`;

const ComponentContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
}
`;

const ImageContainer = styled.div`
    max-width: 600px;

    @media(max-width: 768px){
        width: 90%
}
`;

const Content = styled.div`
    width:500px;

    @media(max-width: 768px){
        width: 90%;
    }
`;

const Description = styled.p`
    font-size: 22px;

    @media(max-width: 768px){
        text-align: center;
    }
`;

const PageImage = styled.img`
    width: 100%;
`;


class About extends Component {
    render() {
        return (
            <ComponentContainer>
                <Content>
                    <Title>HELLO HELLO</Title>
                    <Description>This is the first iteration of my personal website. I'm not sure about the design yet so it might change over time. On this website you'll find my portfolio, a description of my skills and my contact information. These are the appropriate sections of this site. For inappropriate, see <Link to="/blog">Blog</Link></Description>

                </Content>
    
             
            </ComponentContainer>
        );
    }
}

export default About;