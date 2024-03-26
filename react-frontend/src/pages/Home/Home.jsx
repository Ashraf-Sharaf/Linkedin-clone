import React, { useEffect, useState } from "react";
import Header from "../../header";
import axios from "axios";

import "./home.css";
import PostCard from "./PostCard.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userID=localStorage.getItem("UserId");


  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const response = await axios.get(
      "http://localhost/linkedin/back-end/getPosts.php"
    );

    setPosts(response.data["posts"]);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Header />
      <button className="logoutBtn"
      onClick={()=>{

        localStorage.clear();
        navigate("/");

      }}
      
      
      >logout</button>

      <div className="flex column center posts">
        <div className="addpost flex column">
          <input
            type="text"
            placeholder="Whats on your mind"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>

          <button
            onClick={async () => {
              try {
                const formData = new FormData();
                formData.append("description", description);
                formData.append("id", userID);

                const response = await axios.post(
                  "http://localhost/linkedin/back-end/addPost.php",
                  formData
                );

                if (response.data["status"] === "success") {
                  window.location.href = window.location.href;

                }
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Add Post
          </button>
        </div>

        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
