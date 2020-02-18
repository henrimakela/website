import React, { Component } from 'react';
import "./portfolio.css";
import PortfolioSection from './portfolio_section';
import PortfolioCard from './portfolio_card';

//NOTE: THE HEADER USES PARTLY THE SAME CSS AS ABOUT PAGE

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="header_container">
                    <div className="header_text_container">
                        <h1 className="title">PORTFOLIO</h1>
                        <p className="description">I have a lot projects on my Github. Most of them mobile related. I've published four applications on Google Play. Some of the other repositories are just kind of exercises I've made while learning a new technology or a concept.</p>
                        <a href="https://github.com/henrimakela"><button className="btn_black">Take me to Github</button></a>

                    </div>
                    <div className="divider"></div>
                    <div className="image_container_portfolio">
                        <img className="page_image" src="/images/portfolio.png" alt="Portfolio page header image"/>
                    </div>
                    
                </div>
                <div className="portfolio_section_container">
                <PortfolioCard
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
                </div>
            </div>

            
        );
    }
}

export default Portfolio;