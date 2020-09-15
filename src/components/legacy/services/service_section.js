
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 16px;
    padding:16px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #E0E0E0;

    @media(max-width:767px){
        justify-content: center;
        flex-direction: column-reverse;
}
`;

const TextArea = styled.div`
    padding: 16px;
    max-width: 200px;
    display: flex;
    flex-direction: column;

    & > h3{
        font-size: 28px;
        font-weight: bolder;
        margin:0px;
    }

    & > p{
        font-size: 18px;
        font-weight: 600;
    }

    @media(max-width:767px){
    & > h3, p{
        text-align: center;
    }
    
}
`;

const Image = styled.img`
    height: auto;
    max-height: 250px;
    max-width: 350px;
`;

class ServiceSection extends Component {
    render() {
        return (
            <Container>
                <TextArea>
                <h3>{this.props.title}</h3>
                {this.props.description}
                </TextArea>
             
                <Image src={"/images/" + this.props.image} alt="Section illustration"/>
               
            </Container>
        );
    }
}

export default ServiceSection;