import React from "react";
import Header from "../../header";
import axios from "axios";
import { useState } from "react";


const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });



  return (
    <div>
      <Header />

      <div className="flex center">
        <div className="flex column center form">
          <h3>Login</h3>

          <input className="" type="text" placeholder="Email" 
          onChange={(e) => {
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                });
              }}/>


          <input className="" type="text" placeholder="Password" 
          onChange={(e) => {
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                });
              }}/>

          <button
             
              onClick={async () => {
                try {
                  const { email, password } = credentials;

                  const response = await axios.post(
                    "http://localhost/linkedin/back-end/login.php",
                    {
                      email,
                      password,
                    }
                  );

                  console.log(response.data);

                  if (response.data.status === "success") {
                    // navigate("/");
                    
                  }
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
