import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

const Siderbar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">
        <p>{topic}</p>
      </span>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1603822068325-340504badc25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sonny Sangha</h2>
        <h4>sonny@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">2,543</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <div className="sidebar__statNumber">2,448</div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("FrontEnd")}
        {recentItem("BackEnd")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Siderbar;
