import React, {Component} from 'react';
import { Link } from "react-router-dom";
function PostLists(props) {
    return (
      <ul>
        {Object.entries(props.BlogPosts).map(([slug, { ...fields }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
                <h3>{fields.blogTitle}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

export default PostLists;