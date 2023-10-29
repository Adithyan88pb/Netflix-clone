import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="header">
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="netflix logo"
        class="logo"
      ></img>
      <div className="nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">TV Shows</a>
          </li>
          <li>
            <a href="">Latest</a>
          </li>
          <li>
            <a href="">My List</a>
          </li>
        </ul>

        <div className="nav">
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Gifts</a>
            </li>
            <li>
              <a href="">Notifications</a>
            </li>
          </ul>

          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="user profile picture"
            class="profile-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
