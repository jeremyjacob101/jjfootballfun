import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../components-css/MainSource.css";
import EPLTable from "./EPLTable";

const MainSource = () => {
  const seasons = [
    { label: "18/19 Season", value: "18-19", path: "/epl18table" },
    { label: "19/20 Season", value: "19-20", path: "/epl19table" },
    { label: "20/21 Season", value: "20-21", path: "/epl20table" },
    { label: "21/22 Season", value: "21-22", path: "/epl21table" },
    { label: "22/23 Season", value: "22-23", path: "/epl22table" },
    { label: "23/24 Season", value: "23-24", path: "/epl23table" },
  ];

  return (
    <Router>
      <div className="main-section">
        <div className="main-header">
          <div className="header-element">
            <h1 className="main-title">jjfootball</h1>
          </div>
          <div className="menu-bar-items">
            <div className="menu-bar-home">
              <Link to="/">Home</Link>
            </div>
            {/* <div className="menu-bar-about">
              <Link to="/about">About</Link>
            </div>
            <div className="menu-bar-contact">
              <Link to="/contact">Contact</Link>
            </div> */}
            <div className="menu-bar-dataviz">
              <Link to="/dataviz">DataViz</Link>
            </div>
            <div className="menu-bar-dropdown">
              <div className="menu-bar-epltable">EPL Table</div>
              <div className="seasons-dropdown-content">
                {seasons.map((season) => (
                  <Link
                    key={season.value}
                    to={season.path}
                    className="seasons-dropdown-item"
                  >
                    {season.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<h2>Welcome to JJ Football!</h2>} />
          <Route path="/about" element={<h2>About JJ Football</h2>} />
          <Route path="/contact" element={<h2>Contact Us</h2>} />
          <Route path="/dataviz" element={<h2>Data Visualization</h2>} />
          {seasons.map((season) => (
            <Route
              key={season.value}
              path={season.path}
              element={<EPLTable season={season.value} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default MainSource;
