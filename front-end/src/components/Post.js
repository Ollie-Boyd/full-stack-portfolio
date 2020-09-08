import React from 'react';
import * as Markdown from 'react-markdown';

import { useParams } from 'react-router-dom';


function Post(props) {
    const { slug } = useParams();
    const post = props.BlogPosts[slug];
    const { blogTitle, markdownBody, postedDate} = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{blogTitle}</h3>
        <span>{post.author.fields.blogAuthors}</span>
        <span>{new Date(postedDate).toLocaleString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
        <Markdown source={markdownBody} escapeHtml={false}/>
      </div>
    );
  }

export default  Post