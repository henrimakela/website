import React, { Component } from 'react';
import ServiceSection from './service_section';
import './service.css'
class Services extends Component {
    render() {
        return (
            <div className="services_container">
                <ServiceSection title="Mobile Applications" description ={<p>I can develop mobile applications with native <span className="word_highlight">Android</span> and <span className="word_highlight">iOS</span>, although I prefer <span className="word_highlight">Flutter</span> nowadays. </p>} image="mobile_application.png"/>
                <ServiceSection title="Modern Design" description ={<p>Not the most seasoned designer, but given time and coffee I can create a <span className="word_highlight">sleek UI</span> </p>} image="design.png"/>
                <ServiceSection title="Software Architecture" description ={<p>I know what problems a messy codebase can cause for a business and how important a good <span className="word_highlight">architecture</span> is for <span className="word_highlight">scalability</span>, <span className="word_highlight">testing</span> and <span className="word_highlight">integration</span>.</p>} image="pwa.png"/>
                <ServiceSection title="Agile Methodologies" description ="I've been working as a Scrum Master and know how to implement Scrum,LeSS and sAFE" image="agile_illustration.png"/>
                <ServiceSection title="Business Development" description ="This is my big interest and my goal is to steer my career in the software industry towards business development role. A strong knowledge about  the technical side of things is a big asset." image="business_development.png"/>
            </div>
        );
    }
}

export default Services;
