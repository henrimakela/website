import React, { Component } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`

    max-width: 65%;
    border-bottom: 1px solid #E0E0E0;
    padding-bottom: 24px;

    & > a{
        text-decoration: none;
        font-size: 22;
        font-weight: bold;
        color: #17B890;
        float: right;
    }

    & > small{
        color: #17B890;
        font-weight: bold;
    }

    @media(max-width:767px){
        max-width: 100%;
  }

`;

const ItemImage = styled.img`
    width: 100%;
`;

const ItemText = styled.p`
    overflow: hidden;
    position: relative;
    line-height: 1.2em;
    max-height: 6em;
    text-align: justify;
    margin-right: -1em;
    padding-right: 1em;

    &::before{
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
    }

    &::after{
        content: '';
        position: absolute;
        right: 0;
        width: 1em;
        height: 1em;
        margin-top: 0.2em;
        background: white;
    }
`;


class PostItem extends Component {

    render() {

        var content = this.props.content;
        content = content.replace(/<[^>]*>/g, '');

        var d = new Date(this.props.published);
        
        return (
            <ItemContainer>
            <ItemImage src={this.props.headerUrl} alt={this.props.title + " post header image"}/>
                <h1>{this.props.title}</h1>
                <small>{d.toUTCString()}</small>
                <ItemText>{content}</ItemText>
                <a href={this.props.link}>Read more</a>
            </ItemContainer>
        );
    }
}

export default PostItem;