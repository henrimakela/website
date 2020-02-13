import React, { Component } from 'react';
import './drawer.css';

import {Link} from 'react-router-dom';

class Drawer extends Component {

    render() {
        let drawerClasses = "side_drawer";
        if(this.props.show === true){
            drawerClasses = "side_drawer open";
        }

        return (
           <nav className={drawerClasses}>
               <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>   
                </ul>  
           </nav>
        );
    }
}

export default Drawer;