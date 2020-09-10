import React, { Component } from 'react';
import PortfolioCard from './portfolio_card';
import styled from 'styled-components';


const Header = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 24px;

    @media(max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

const TextArea = styled.div`
    width: 500px;

    @media(max-width: 768px){
        width: 90%;
    }
`;

const Title = styled.h1`
    font-size: 72px;
    font-weight: 800;
    line-height: 90%;

    @media(max-width: 768px){
        font-size: 32px;
        text-align: center;
    }
`;

const Description = styled.p`
    font-size: 22px;

    @media(max-width: 768px){
        text-align: center;
    }

`;

const Button = styled.button`
    color: white;
    background-color: black;
    font-weight: 800;
    font-size: 22px;
    width: 100%;
    height: 64px;
    border: none;

    @media(max-width: 768px){
        width:100%;
    }

`;

const Section = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;

`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & > h4:hover{
        color: #17B890;
    }
`;

const OtherContent = styled.div`
    max-width:80%;
    margin: auto;
    padding: 32px 16px;

    & > h4 > a{
        text-decoration: none;
        color: #17B890
    }
    &a:hover{
        color:black;
    }

`;

const AppContent = styled.div``;

const ImageArea = styled.div`
    max-width: 450px;
`;

const HeaderImage = styled.img`
    width: 100%;
`;


class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showApps: true
        };
      }
      
      displayApps(showapps) {
          this.setState({
              showApps: showapps
          })
      }
    render() {
        return (
            <div>
                <Header>
                    <TextArea>
                        <Title>PORTFOLIO</Title>
                        <Description>I have a lot projects on my Github. Most of them mobile related. I've published four applications on Google Play. Some of the other repositories are just kind of exercises I've made while learning a new technology or a concept.</Description>
                        <a href="https://github.com/henrimakela"><Button className="btn_black">Take me to Github</Button></a>
                        
                    </TextArea>
                    <ImageArea>
                        <HeaderImage src="/images/portfolio.png" alt="Portfolio page header image"/>
                    </ImageArea>
                    
                </Header>
                <Row>
                        <h4 style={{color: this.state.showApps ? "#17B890" : "#000", cursor: "pointer"}} onClick={() => this.displayApps(true)}>Apps</h4>
                        <h4 style={{color: this.state.showApps ? "#000" : "#17B890", cursor: "pointer"}} onClick={() => this.displayApps(false)}>Other</h4>
                    </Row>
                <OtherContent style={{display : this.state.showApps ? 'none' : 'inherit'}}>
                    <h3>Articles</h3>
                    <h4><a href="https://blog.boogiesoftware.com/2020/01/web-application-development-with-flutter.html">Web application development with Flutter</a></h4>
                    <h4><a href="https://blog.boogiesoftware.com/2019/10/mobile-application-development-with.html">Mobile application development with Flutter - a Case Study</a></h4>
                </OtherContent>
                <AppContent style={{display : this.state.showApps ? 'inherit' : 'none'}}>
                <Section>
                <PortfolioCard
                    playUrl="https://play.google.com/store/apps/details?id=mmanews.henrm.com.mma_news&hl=en"
                    background={"#2196F3"}
                    subtitleColor={"#2196F3"}
                    image="mma_news.png" 
                    title="Stay up to date with the latest news in MMA."
                    currently="Being a huge fan of MMA and having competed in the sport myself, I created a mobile app for myself so I could read all the latest MMA related news as easy as possible. Basically all it does is combine RSS feeds from the most relevant sources."
                    future="Not planning on developing this further."
                    tech="The app is made using Flutter, so it can be built for both Android and iOS. Although it is only available for Android on Google Play, you can clone the repository from my Github and built it for your iOS device."
                    image="mma_news.png"
                    keywords="Dart, Flutter, Cross-platform, RSS"               
                    />
                <PortfolioCard 
                    playUrl="https://play.google.com/store/apps/details?id=com.henri.monthlymusicchallenge"
                    background={"#000"}
                    subtitleColor={"#000"} 
                    image="guitar_log.png"
                    title="Create exercises and train guitar"
                    currently="An app that lets you plan and create your guitar exercises and then execute them. Comes with a couple of premade exercises. It'll also show your progress and simple statistics."
                    future="Not planning on developing this further."
                    tech="Local SQLite database to store user data. The application uses all the best practises architecture-wise including dependency injection and business logic components."
                    image="guitar_log.png"
                    keywords="Dart, Flutter, Cross-platform"
                    
                    />
                <PortfolioCard
                    playUrl="https://play.google.com/store/apps/details?id=com.henrimakela.locations" 
                    background={"#78947A"} 
                    subtitleColor={"#78947A"} 
                    image="kalapaikka.png"
                    title="Keep track of your favorite fishing spots"
                    currently="An Android application for recreational fishers who want to log their best fishing spots on the map. The user can write down a name, description, what type of fish lives in that spot, time of the year and many other things. "
                    future="Since it gained at least some users and visibility on Google Play (200 installs with half of the users active), I've decided to develop 2.0 version of it when I've got time. 
                    It'll include features like sharing public fishing spots and writing tips for them, some kind of image feed for sharing photos of the places and catches and a complete UI facelift.
                    "
                    tech="The map is provided by Mapbox Android SDK. The backend is handled by Firebase and the application uses MVVM design pattern with LiveData"
                    image="kalapaikka.png"
                    keywords="Kotlin, Android architecture components, MVVM"
                    
                    />
                </Section>
                </AppContent>
            </div>

            
        );
    }
}

export default Portfolio;