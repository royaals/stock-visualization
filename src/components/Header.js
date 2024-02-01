import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import ChartB from "./ChartB";

import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("");
  // const handleNavClick = (event) => {
  //   const navLinks = document.querySelectorAll(".navbar a");
  //   navLinks.forEach((link) => {
  //     link.classList.remove("selected");
  //   });
  //   event.target.classList.add("selected");
  // };

  const handleChartA = () => {
    console.log("chart1");
    navigate("./");
    setSelectedPage("chart1");
  };

  const handleChartB = () => {
    console.log("chart2");
    navigate("./chart-2");
    setSelectedPage("chart2");
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <p>
            <h4>Visualization</h4>
          </p>
          <nav className="navbar">
            <a
              href=""
              onClick={handleChartA}
              className={selectedPage === "chart1" ? "selected" : ""}
              style={{ whiteSpace: "nowrap" }}
            >
              Chart-1
            </a>
            <a
              href={ChartB}
              onClick={handleChartB}
              className={selectedPage === "chart2" ? "selected" : ""}
              style={{ whiteSpace: "nowrap" }}
            >
              Chart-2
            </a>
          </nav>
        </div>

        <div className="header__right">
          <div className="header__search">
            <input type="text"></input>
            <SearchIcon />
          </div>
          <div className="icons">
            <NotificationsNoneOutlinedIcon
              style={{ marginRight: "25px", marginLeft: "25px" }}
            />
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              style={{ marginRight: "10px", height: "35px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
