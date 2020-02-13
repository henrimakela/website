import React, { Component } from 'react';
import './about.css';


class About extends Component {
    render() {
        return (
            <div className="content_container">
                <div className="content">
                    <h1 className="title">WELCOME TO MY SITE</h1>
                    <p className="description">This website was built with Flutter to provide context for the article I recently wrote about web application development with Flutter. The backend for the blog posts is handled by Firebase. You can view the full source code on my Github page.</p>

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