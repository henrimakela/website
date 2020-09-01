import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    border-radius: 32px;
    justify-content: center;
    width: 80%;
    padding: 64px 0px;
    -webkit-box-shadow: 5px 5px 30px 0px rgba(163,163,163,1);
    -moz-box-shadow: 5px 5px 30px 0px rgba(163,163,163,1);
    box-shadow: 5px 5px 30px 0px rgba(163,163,163,1);

    @media(max-width: 900px){
        padding: 24px 0px;
        margin: 0px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: none;
        background: white !important;
        border-radius: 0px;
        border-bottom: 1px solid #E0E0E0;
    }
`;


const CardImage = styled.img`
    margin-left: 15%;
    max-width: 35%;


    @media(max-width: 900px){
        margin: 0px;
        max-width: 40%;
    }

    @media(max-width: 480px){
        max-width: 80%;
    }
`;

const TextArea = styled.div`
    max-width: 400px;
    margin: 0px 32px;

    @media(max-width: 900px){
        max-width: 80%;
        text-align: center;

        & > a{
            display: flex;
            justify-content: center;
        }
    }
`;

const Subtitle = styled.h4`

    @media(max-width:900px){
        display: none;
    }
`;

const Paragraph = styled.p`

    @media(max-width:900px){
        display: none;
    }
`;

const Badge = styled.img`
    height:80px;
    width: 200px;
`;


class PortfolioCard extends Component {
    render() {
        return (
            <Card style={{background: `linear-gradient(90deg, ${this.props.background} 35%, #fff 0%)`}}>
                <CardImage src={"/images/" + this.props.image}/>
                <TextArea>
                    <h4>{this.props.title}</h4>
                    <Subtitle style={{color: this.props.subtitleColor}}>Currently</Subtitle>
                    <Paragraph>{this.props.currently}</Paragraph>
                    <Subtitle style={{color: this.props.subtitleColor}}>In the future</Subtitle>
                    <Paragraph>{this.props.future}</Paragraph>
                    <Subtitle style={{color: this.props.subtitleColor}}>Tech</Subtitle>
                    <Paragraph>{this.props.tech}</Paragraph>
                    <Subtitle style={{color: this.props.subtitleColor, fontWeight: 800}}>Keywords</Subtitle>
                    <p style={{color: this.props.subtitleColor, fontWeight: "bold"}}>{this.props.keywords}</p>
                    <a href={this.props.playUrl}><Badge src="/images/google-play-badge.png"/></a>
                </TextArea>
            </Card>
        );
    }
}

export default PortfolioCard;