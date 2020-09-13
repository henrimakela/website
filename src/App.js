import React, {Component} from 'react';
import Toolbar from './components/toolbar/toolbar';
import Drawer from './components/toolbar/drawer/drawer';
import Backdrop from './components/toolbar/drawer/backdrop/backdrop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blog from './components/blog/blog';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Helmet from 'react-helmet';
import './App.css';


class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState)=>{
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }


  render() {
    let backdrop;

    if(this.state.sideDrawerOpen === true){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <Router>
        <Helmet>
        <meta charset="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Professional and unprofessional content" data-react-helmet="true"/>
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        <title>Henri Mäkelä</title><link href="/static/css/main.91c5b94b.chunk.css" rel="stylesheet"/>
            </Helmet>

      <div className="App">
        <div className="layout-container">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <Drawer show={this.state.sideDrawerOpen}/>
        {backdrop}

        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        </div>
      </div>
      </Router>
    );
  
  }
  
}

export default App;
