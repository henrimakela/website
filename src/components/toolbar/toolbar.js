
import React, { Component } from 'react';
import DrawerToggle from './drawer/drawer_toggle';
import {Link} from 'react-router-dom';
import './toolbar.css'


class Toolbar extends Component {

    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="burger_bar">
                        <DrawerToggle click={this.props.drawerClickHandler}/>
                    </div>
                    <div className="spacer_mobile"></div>
                    <div className="toolbar_logo"><a href="/">LOGO</a></div>
                    <div className="spacer"></div>
                    <div className="toolbar_nav_items">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/services">Skills</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>    
                        </ul>                 
                    </div>
                   
                </nav>
            </header>
        );
    }
}

export default Toolbar;