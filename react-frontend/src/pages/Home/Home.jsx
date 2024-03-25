import React, { useEffect, useState } from "react";
import Header from "../../header";
import axios from "axios";

import "./home.css";
import PostCard from "./PostCard.jsx";

const Home = () => {

  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const response = await axios.get(
      "http://localhost/linkedin/back-end/getPosts.php"
    );


    setPosts(response.data['posts']);
  };

  useEffect(() => {
    loadPosts();
  }, []);


  return (
    <div>
      <Header />
      <div className="flex column center posts">
        
        {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
        
      </div>
    </div>
  );
};

export default Home;




