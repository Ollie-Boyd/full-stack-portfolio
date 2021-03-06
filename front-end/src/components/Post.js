import React from 'react';
import * as Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import CodeBlock from './CodeBlock'



function Post(props) {
    const { slug } = useParams();
    const post = props.BlogPosts[slug];
    const { blogTitle, markdownBody, datePretty, tags, author} = post;

    
    const tagList = tags.map( (tag, index) =>
        <li key={index}>    
            {tag}
        </li>
);
    return (
      <div style={{ padding: 20 }}>
        <h3>{blogTitle}</h3>
        <ul>{tagList}</ul>
        <span>{author}</span>
        <span>{datePretty}</span>
        <Markdown source={markdownBody} escapeHtml={false} renderers={{ code: CodeBlock }}/>
      </div>
    );
  }

export default  Post