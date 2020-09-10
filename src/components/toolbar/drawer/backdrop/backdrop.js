import React, { Component } from 'react';
import styled from 'styled-components';

const BackdropShadow = styled.div`
    position: fixed;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 100;
`;

class Backdrop extends Component {
    render() {
        return (
            <BackdropShadow onClick={this.props.click}></BackdropShadow>
        );
    }
}

export default Backdrop;