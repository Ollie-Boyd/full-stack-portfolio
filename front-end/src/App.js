import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Posts from './components/Posts'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import PostLists from './components/PostLists'
import Post from './components/Post'


function App() {

  const [BlogPosts1, setData] = useState(false);

  const client = contentful.createClient({
    space: 'ov1iw7446lrq',
    accessToken: 'Ke3AH6zwRXxPy_RrzZo1Scw-uo7AlJVr93LhJDSj6-k' 
  })

  const BlogPosts = {
    '1': {
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    '2': {
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    }
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const resp = await client.getEntries({
        content_type: 'blogPost'
      })
      const onlyFields = resp.items.map(x => x.fields)
      const cleanedUpFields = onlyFields.map( post => {
        post.author = post.author.fields.blogAuthors;
        post.tags = post.tags.map(tag => tag.fields.tagNames);
        post.datePretty = new Date(post.postedDate).toLocaleString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})
        return post;
      })
      // spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.

      //Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
      const convertArrayOfObjectsToObject = cleanedUpFields.reduce((obj, item) => ({...obj, [item.customPath]: item}) ,{});
      console.log(convertArrayOfObjectsToObject);
      setData(convertArrayOfObjectsToObject);
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  

  return (
    <Router>
      <div className="App">
      
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="posts" element={<Posts />}>
            <Route path="/" element={BlogPosts1 &&<PostLists BlogPosts={BlogPosts1} />} />
            <Route path=":slug" element={BlogPosts1 &&<Post BlogPosts={BlogPosts1} />} />
          </Route>
        </Routes>
        <Footer/>
    
      </div>
    </Router>
  );
}

export default App;

