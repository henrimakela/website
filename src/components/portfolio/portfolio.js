import React, { Component } from 'react';
import "./portfolio.css";

//NOTE: THE HEADER USES PARTLY THE SAME CSS AS ABOUT PAGE

class Portfolio extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header_text_container">
                    <h1 className="title">PORTFOLIO</h1>
                    <p className="description">I have a lot projects on my Github. Most of them mobile related. I've published four applications on Google Play. Some of the other repositories are just kind of exercises I've made while learning a new technology or a concept.</p>
                    <a href="https://github.com/henrimakela"><button className="btn_black">Take me to Github</button></a>

                </div>
                <div className="divider"></div>
                <div className="image_container_portfolio">
                    <img className="page_image" src="/images/portfolio.png" alt="Portfolio page header image"/>
                </div>
            </div>
        );
    }
}

export default Portfolio;