import React from "react";
import Header from "../../header";

const SignupUser= () =>{
    return <div>
        <Header/>
        <div className="flex center">
        <div className="flex column center form">
          <h3>Sign-up</h3>
          <input className="" type="text" placeholder="Name" />
          <input className="" type="text" placeholder="Email" />
          <input className="" type="text" placeholder="Password" />

          <button className="" onClick={() => {}}>
            Sign-up
          </button>
        </div>
      </div>
        
    </div>
};


export default SignupUser;