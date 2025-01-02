import React from "react";
import "../components-css/MainSource.css"; // Optional: Import a CSS file for styling
import EPLTable from "../components/EPLTable.js";

const MainSource = () => {
  return (
    <div className="main-section">
      <div className="main-header">
        <div className="header-element">
          <h1 className="main-title">jjfootball</h1>
        </div>
        <div className="menu-bar-items">
          <div className="menu-bar-home">Home</div>
          <div className="menu-bar-about">About</div>
          <div className="menu-bar-epltable">EPL Table</div>
          <div className="menu-bar-contact">Contact</div>
        </div>
      </div>
      <EPLTable/>
    </div>
  );
};

export default MainSource;
