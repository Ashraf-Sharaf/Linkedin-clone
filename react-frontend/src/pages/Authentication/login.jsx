import React from "react";
import Header from "../../header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
             onClick={console.log(credentials)}
              // onClick={async () => {
              //   try {
              //     const { email, password } = credentials;

              //     const response = await axios.post(
              //       "http://127.0.0.1:8000/login",
              //       {
              //         email,
              //         password,
              //       }
              //     );

              //     console.log(response.data);

              //     if (response.data.status === "success") {
              //       // navigate("/");
              //     }
              //   } catch (error) {
              //     console.error(error);
              //   }
              // }}
            >
              Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
