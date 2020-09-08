import React from 'react'
import * as ReactMarkdown from 'react-markdown'
import {Link} from "react-router-dom";

const BlogItem = (props) => (
    <div className="box content">
        <Link to={{
            pathname: `/blog/${props.customPath}`,
            state: { props }
        }}>
            Read More
        </Link>  
      <h1>{props.blogTitle}</h1>
      <ReactMarkdown source={props.markdownBody}   
      escapeHtml={false}/>
    </div>
  )

  export default BlogItem

 