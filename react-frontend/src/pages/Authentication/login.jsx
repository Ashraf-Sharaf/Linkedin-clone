import React from "react";
import Header from "../../header";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="flex center">
        <div className="flex column center form">
          <h3>Login</h3>

          <input className="" type="text" placeholder="Email" />
          <input className="" type="text" placeholder="Password" />

          <button className="" onClick={() => {}}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
