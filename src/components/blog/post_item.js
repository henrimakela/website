import React, { Component } from 'react';
import './post_item.css';

class PostItem extends Component {



    render() {

        var content = this.props.content;
        content = content.replace(/<[^>]*>/g, '');

        var d = new Date(this.props.published);
        
        return (
            <div className="item_container">
            <img className="item_image" src={this.props.headerUrl} alt={this.props.title + " post header image"}/>
                <h1>{this.props.title}</h1>
                <small>{d.toUTCString()}</small>
                <p className="block-with-text">{content}</p>
                <a href={this.props.link}>Read more</a>
            </div>
        );
    }
}

export default PostItem;