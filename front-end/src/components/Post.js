import React from 'react';
import {
    useParams
  } from 'react-router-dom';


function Post(props) {
    const { slug } = useParams();
    const post = props.BlogPosts[slug];
    const { blogTitle, markdownBody } = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{blogTitle}</h3>
        {/* <p>{author}</p> */}
      </div>
    );
  }

export default  Post