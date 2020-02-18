
import React, { Component } from 'react';
import './service_section.css';

class ServiceSection extends Component {
    render() {
        return (
            <div className="container">
                <div className="text_container">
                <h3>{this.props.title}</h3>
                {this.props.description}
                </div>
             
                <img className="section_image" src={"/images/" + this.props.image} alt="Section illustration"/>
               
            </div>
        );
    }
}

export default ServiceSection;