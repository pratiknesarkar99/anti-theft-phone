import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            <a href="/">
              Track Your <span>Device</span>
            </a>
          </h1>

          <ul>
            <li class="current">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
          </ul>
        </header>

        <div className="content" />

        <footer>All Rights Reserved, Copyright © 2019</footer>
      </div>
    );
  }
}

export default Home;
