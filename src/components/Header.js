import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://camo.githubusercontent.com/db1638f9b3e5195b4badb791ab8a58bdad07d26bbb7d668eef3ba5f7dde164bf/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63612f4c696e6b6564496e5f6c6f676f5f696e697469616c732e706e672f36303070782d4c696e6b6564496e5f6c6f676f5f696e697469616c732e706e67 "
          alt="logoss"
        />

        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/D4D03AQFRuIKHGgfSSA/profile-displayphoto-shrink_800_800/0/1685467574341?e=1693440000&v=beta&t=1ODw3kMjUVkvvu3cgzDMd6W4dMoA7ohpTc226NzuQBo"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
