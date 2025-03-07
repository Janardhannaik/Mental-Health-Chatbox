import React from "react";
import "./Navbar.css";

import wellbot from "./wellbot.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="nav-logo">
        <img src={wellbot} alt="" /> */}
      <p>Heapy Bot</p>
      {/* </div> */}
      <ul className="nav-menu">
        {/* <li>Home</li> */}
        <li></li>
        {/* <ul style={{ listStyleType: "none", display: "flex", padding: 0 }}> */}
        <li style={{ marginRight: "20px" }}>
          <Link
            to=""
            style={{
              textDecoration: "none", // Remove underline
              color: "black", // Change text color
              fontSize: "18px", // Optional font size
            }}
          >
            Home
          </Link>
        </li>

        {/* <li style={{ marginRight: "20px" }}>
          <Link
            to="/about"
            style={{
              textDecoration: "none", // Remove underline
              color: "black", // Change text color
              fontSize: "18px", // Optional font size
            }}
          >
            Booking
          </Link>
        </li> */}

        <li style={{ marginRight: "20px" }}>
          <Link
            to="/booking"
            style={{
              textDecoration: "none", // Remove underline
              color: "black", // Change text color
              fontSize: "18px", // Optional font size
            }}
          >
            Booking
          </Link>
        </li>
      </ul>
      <div className="nav-login">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
