import React, { useEffect, useState } from "react";
import Header from "../../header";
import axios from "axios";

import "./home.css";
import PostCard from "./PostCard.jsx";

const Home = () => {
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

      <div className="flex column center posts">
        <div>
          <input
            type="text"
            placeholder="description"
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
                  alert("Post added");
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
