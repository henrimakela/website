import React, { Component } from 'react';
import PostItem from './post_item';
import styled from  'styled-components';


const PostsContainer  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        fetch("https://www.googleapis.com/blogger/v3/blogs/650704831667915284/posts?fetchImages=true&key=" + process.env.REACT_APP_BLOGGER_API_KEY )
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
      }
  

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading posts...</div>;
        } else {
          return (
            <PostsContainer>
              {items.map(item => (
                <PostItem headerUrl={item.images[0].url} link={item.url} title={item.title} content={item.content} published={item.published} />
              ))}
            </PostsContainer>
          );
        }
    }
}


export default Blog;