import React, { useState } from "react";
import "../components-css/MainSource.css";
import EPLTable from "./EPLTable";

const MainSource = () => {
  const [selectedSeason, setSelectedSeason] = useState();

  const seasons = [
    { label: "18/19 Season", value: "18-19" },
    { label: "19/20 Season", value: "19-20" },
    { label: "20/21 Season", value: "20-21" },
    { label: "21/22 Season", value: "21-22" },
    { label: "22/23 Season", value: "22-23" },
    { label: "23/24 Season", value: "23-24" },
  ];

  return (
    <div className="main-section">
      <div className="main-header">
        <div className="header-element">
          <h1 className="main-title">jjfootball</h1>
        </div>
        <div className="menu-bar-items">
          <div className="menu-bar-home">Home</div>
          <div className="menu-bar-about">About</div>
          <div className="menu-bar-contact">Contact</div>
          <div className="menu-bar-dropdown">
            <div className="menu-bar-epltable">EPL Table</div>
            <div className="dropdown-content">
              {seasons.map((season) => (
                <div
                  key={season.value}
                  className="dropdown-item"
                  onClick={() => setSelectedSeason(season.value)}
                >
                  {season.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <EPLTable season={selectedSeason} />
    </div>
  );
};

export default MainSource;
