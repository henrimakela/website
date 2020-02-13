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
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <Drawer show={this.state.sideDrawerOpen}/>
        {backdrop}

        <div className="layout_container">
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
