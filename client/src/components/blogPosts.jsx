import React, {useEffect, useState} from "react";
import axios from "axios";

function BlogPosts() {
  //default state is an empty array
  const [posts, setBlogPosts] = useState([]);

  const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000");
    //parse json data
    const result = response.data;
    //put data inside the useState, this changes the state
    setBlogPosts(result);
    
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
  };
  
  //makes a request everytime the component is rendered
  useEffect(() => {
    getPosts();
  },[]);

return (
<div className="container">
    <h1>Metal Band Review</h1>
    <a id="newPostBtn" href="/new">New Post</a>
    <ul id="postsList">
      {posts.map(post => (
          <li>
            <h2>
              {post.title}
            </h2>
          <small>
              {post.date_created} 
          </small>
          <p>
              {post.body}
          </p>
          <small>By:{post.creator_name}</small>
      </li>
    ))}  
    </ul>
</div>
)};

export default BlogPosts