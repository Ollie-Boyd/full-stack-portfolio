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
      const map1 = resp.items.map(x => x.fields)
      const map2 = map1.reduce((obj, item) => ({...obj, [item.customPath]: item}) ,{});

      console.log(map1)
      console.log(map2)
      setData(map2);
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

