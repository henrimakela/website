import React, { Component } from 'react';
import './portfolio_card.css'
class PortfolioCard extends Component {
    render() {
        return (
            <div className="portfolio_card" style={{background: `linear-gradient(90deg, ${this.props.background} 35%, #fff 0%)`}}>
                <img className="portfolio_card_image" src={"/images/" + this.props.image}/>
                <div className="portfolio_card_text_container">
                    <h4>{this.props.title}</h4>
                    <h4 className="hide_on_mobile" style={{color: this.props.subtitleColor}}>Currently</h4>
                    <p className="hide_on_mobile">{this.props.currently}</p>
                    <h4 className="hide_on_mobile" style={{color: this.props.subtitleColor}}>In the future</h4>
                    <p className="hide_on_mobile">{this.props.future}</p>
                    <h4 className="hide_on_mobile" style={{color: this.props.subtitleColor}}>Tech</h4>
                    <p className="hide_on_mobile">{this.props.tech}</p>
                    <h4 className="hide_on_mobile" style={{color: this.props.subtitleColor}}>Keywords</h4>
                    <p style={{color: this.props.subtitleColor, fontWeight: "bold"}}>{this.props.keywords}</p>
                    <a><img className="google_play_badge" src="/images/google-play-badge.png"/></a>
                </div>
            </div>
        );
    }
}

export default PortfolioCard;