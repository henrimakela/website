import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Section = styled.section`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextArea = styled.div`
    & > h1 {
        margin-bottom: 16px;
        max-width: 100%;
        font-size: 68px;
    }

    & > p {
        margin-top:16px;
        max-width: 450px;
        font-size: 28px;
    }

    @media(max-width: 768px){
        max-width: 80%;
        align-self: center;
        justify-self: center;
        
        & > h1 {
            text-align: center;
            font-size: 32px;
        }

        & > p {
            font-size: 22px;
        }

    }


`;


class Contact extends Component {
    render() {
        return (
            <Container>
                <Section>
                    <TextArea>
                    <h1>Contact info.</h1>
                    <p>For <span style={{fontWeight: 800}}>professional</span> business, you can contact me from the links below. </p>
                    <p>For <span style={{fontWeight: 800}}>unprofessional</span> business, you can contact me from the links below. </p>
                    </TextArea>
                        <IconRow/>
                    
                    </Section>
                
            </Container>
        );
    }
}

export default Contact;



const Row = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 768px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    

        & >h4{
            display: none;
        }
    }
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    padding: 16px;
`;

const ContactLink = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
`;


class IconRow extends Component {
    render() {
        return (
            <Row>
                   <ContactLink href="https://www.linkedin.com/in/henri-m%C3%A4kel%C3%A4-92aa42114/"><Icon src="/images/linked_in.png" alt="Contact me"/> <h4>LinkedIn</h4></ContactLink> 
                   <ContactLink href="https://github.com/henrimakela"><Icon src="/images/github.png" alt="Contact me"/> <h4>Github</h4></ContactLink> 
                   <ContactLink href="https://instagram.com/henmakela"><Icon src="/images/instagram.png" alt="Contact me"/><h4>Instagram</h4></ContactLink> 
                   <ContactLink href="mailto:henri.o.makela@gmail.com"><Icon src="/images/mail.png" alt="Contact me"/><h4>Email</h4></ContactLink> 
                </Row>
        );
    }
}

