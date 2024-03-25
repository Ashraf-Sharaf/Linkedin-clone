import React from "react";
import Header from "../../header";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex column center posts">
        <div className="flex column post">
          <div>
            <div>User Name</div>
            <div>user position</div>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            placeat, rerum rem sequi cum fuga ducimus assumenda ipsam eveniet
            quidem itaque reiciendis doloremque consequuntur nisi, voluptates
            amet nulla, ut quae?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
