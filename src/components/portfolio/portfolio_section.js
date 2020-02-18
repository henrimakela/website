import React, { Component } from 'react';
import './portfolio_section.css';

class PortfolioSection extends Component {

    render() {
        return (
            <div className="portfolio_section_content">
                <div className="portfolio_text_container">
                    <h1 className="title">{this.props.title}</h1>
                    <h4 className="portfolio_subtitle">Currently</h4>
                    <p>{this.props.currently}</p>
                    <h4 className="portfolio_subtitle">In the future</h4>
                    <p>{this.props.future}</p>
                    <h4 className="portfolio_subtitle">Tech</h4>
                    <p>{this.props.tech}</p>
                    <h4 className="portfolio_subtitle">Keywords</h4>
                    <p className="keywords">{this.props.keywords}</p>
                </div>
                <img className="portfolio_section_image" src={"/images/" + this.props.image}/>
            </div>
        );
    }
}

export default PortfolioSection;