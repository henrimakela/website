import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
            <div className="content_section">
                <div className="text_div">
                <h1>Contact info.</h1>
                <p>For <span style={{fontWeight: 800}}>professional</span> business, you can contact me from the links below. </p>
                <p>For <span style={{fontWeight: 800}}>unprofessional</span> business, you can contact me from the links below. </p>
                </div>
                    <IconRow/>
                
                </div>
            
            </div>
        );
    }
}

export default Contact;



class IconRow extends Component {
    render() {
        return (
            <div className="icon_row">
                   <a className="contact_link" href="https://www.linkedin.com/in/henri-m%C3%A4kel%C3%A4-92aa42114/"><img className="icon" src="/images/linked_in.png" alt="Contact me"/> <h4>LinkedIn</h4></a> 
                   <a className="contact_link" href="https://github.com/henrimakela"><img className="icon" src="/images/github.png" alt="Contact me"/> <h4>Github</h4></a> 
                   <a className="contact_link" href="https://instagram.com/henmakela"><img className="icon" src="/images/instagram.png" alt="Contact me"/><h4>Instagram</h4></a> 
                   <a className="contact_link" href="mailto:henri.o.makela@gmail.com"><img className="icon" src="/images/mail.png" alt="Contact me"/><h4>Email</h4></a> 
                </div>
        );
    }
}

