import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
            <div className="content_section">
                <div className="text_div">
                <h1>GET IN <span style={{color: "#17B890"}}>TOUCH</span></h1>
                </div>

                <div className="icon_row">
                   <a className="contact_link" href="https://linkedin.com"><img className="icon" src="/images/linked_in.png" alt="Contact me"/>  <h4>LinkedIn</h4></a> 
                   <a className="contact_link" href="https://github.com/henrimakela"><img className="icon" src="/images/github.png" alt="Contact me"/> <h4>Github</h4></a> 
                   <a className="contact_link" href="https://instagram.com/henmakela"><img className="icon" src="/images/instagram.png" alt="Contact me"/><h4>Instagram</h4></a> 
                   <a className="contact_link" href="https://google.com"><img className="icon" src="/images/mail.png" alt="Contact me"/><h4>Email</h4></a> 
                </div>
                </div>
            
            </div>
        );
    }
}

export default Contact;