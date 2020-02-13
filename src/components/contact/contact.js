import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
            <div className="content_section">
                <div className="text_div">
                <h1>GET IN TOUCH</h1>
                </div>

                <div className="icon_row">
                   <a href="https://linkedin.com"><img className="icon" src="/images/linked_in.png" alt="Contact me"/></a> 
                   <a href="https://github.com/henrimakela"><img className="icon" src="/images/github.png" alt="Contact me"/></a> 
                   <a href="https://instagram.com/henmakela"><img className="icon" src="/images/instagram.png" alt="Contact me"/></a> 
                   <a href="https://google.com"><img className="icon" src="/images/mail.png" alt="Contact me"/></a> 
                </div>
                </div>
            
            </div>
        );
    }
}

export default Contact;