import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.licdn.com/dms/image/D4D16AQG8gmfh__Zl7g/profile-displaybackgroundimage-shrink_350_1400/0/1687594602699?e=1693440000&v=beta&t=BxpSvUkxmDkVyQPvuPeIHmEf6JYJeZ9-4wQIwVA-goo"
          alt=""
        />
        <Avatar />

        <h2>Satabdo Majumder</h2>
        {/* <h4>
          3⭐ 600+ @LeetCode | 250+ @GFG | Front End Development | React + Redux
          | Mongo DB | Node JS | ExpressJS | CSE AI-ML '24
        </h4> */}
        <h4>satabdomajumdertech@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">1000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">5338</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Data Structures and Algorithms")}
        {recentItem("Javascript")}
        {recentItem("React JS")}
        {recentItem("Leetcode")}
      </div>
    </div>
  );
};

export default SideBar;
