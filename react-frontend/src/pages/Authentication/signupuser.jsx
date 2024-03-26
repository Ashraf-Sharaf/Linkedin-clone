import React from "react";
import Header from "../../header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupUser = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  return (
    <div>
      <Header />
      <div className="flex center">
        <div className="flex column center form">
          <h3>Sign-up</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                name: e.target.value,
              });
            }}
          />

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                email: e.target.value,
              });
            }}
          />

          <input
            className=""
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                password: e.target.value,
              });
            }}
          />

          <input
            className=""
            type="text"
            placeholder="Bio"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                bio: e.target.value,
              });
            }}
          />

          <button
            onClick={async () => {
              try {
                const { name, email, password, bio } = credentials;

                const formData = new FormData();
                formData.append("name", name);
                formData.append("email", email);
                formData.append("password", password);
                formData.append("bio", bio);

                const response = await axios.post(
                  "http://localhost/linkedin/back-end/signupUser.php",
                  formData
                );

                if (response.data["status"] === "success") {
                  navigate("/home");
                }
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupUser;
