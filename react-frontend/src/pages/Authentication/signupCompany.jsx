import React from "react";
import Header from "../../header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupCompany = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
  });

  return (
    <div>
      <Header />
      <div className="flex center">
        <div className="flex column center form">
          <h3>Sign-up</h3>

          <label>Name</label>
          <input className="inputs"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                name: e.target.value,
              });
            }}
          />
          <label>Email</label>
          <input className="inputs"
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                email: e.target.value,
              });
            }}
          />
          <label>Password</label>
          <input className="inputs"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                password: e.target.value,
              });
            }}
          />
          <label>Description</label>
          <input className="inputs"
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                description: e.target.value,
              });
            }}
          />

          <button className="loginBtn"
            onClick={async () => {
              try {
                const { name, email, password, description } = credentials;

                const formData = new FormData();
                formData.append("name", name);
                formData.append("email", email);
                formData.append("password", password);
                formData.append("description", description);

                const response = await axios.post(
                  "http://localhost/linkedin/back-end/signupCompany.php",
                  formData
                );

                if (response.data["status"] === "success") {
                  navigate("/");
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

export default SignupCompany;
