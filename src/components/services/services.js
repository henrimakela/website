import React, { Component } from 'react';
import ServiceSection from './service_section';
import './service.css'
class Services extends Component {
    render() {
        return (
            <div className="services_container">
                <ServiceSection title="Mobile Applications" description ="I can develop mobile applications with native Android and iOS, although I prefer Flutter nowadays." image="mobile_application.png"/>
                <ServiceSection title="Modern Design" description ="Not the most seasoned designer, but given time and coffee I can create a sleek UI " image="design.png"/>
                <ServiceSection title="Software Architecture" description ="I know what problems a messy codebase can cause for a business and how important a good architecture is for scalability, testing and integration." image="pwa.png"/>
                <ServiceSection title="Agile Methodologies" description ="I've been working as a Scrum Master and know how to implement Scrum,LeSS and sAFE" image="agile_illustration.png"/>
                <ServiceSection title="Business Development" description ="This is my big interest and my goal is to steer my career in the software industry towards business development role. A strong knowledge about  the technical side of things is a big asset." image="business_development.png"/>
            </div>
        );
    }
}

export default Services;
