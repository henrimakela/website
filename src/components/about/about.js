import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './about.css';


class About extends Component {
    render() {
        return (
            <div className="content_container">
                <div className="content">
                    <h1 className="title">WELL HELLO THERE</h1>
                    <h2>WORK IN PROGRESS. SORRY FOR ANY INCONVENIENCE</h2>
                    <p className="description">This is the first iteration of my personal website. I'm not sure about the design yet so it might change over time. On this website you'll find my portfolio, a description of my skills and my contact information. These are the appropriate sections of this site. For inappropriate, see <Link to="/blog">Blog</Link></p>

                </div>
                <div className="divider"></div>
                <div className="image_container">
                    <img className="page_image" src="/images/pwa.png" alt="Progressive web application"/>
                </div>
            </div>
        );
    }
}

export default About;