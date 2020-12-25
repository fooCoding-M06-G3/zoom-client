import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <div className="footer">
      <Grid container spacing={1} >
        <Grid item xs>
          <ul className="footer-style">
            <h3>Security</h3>
            <li>
              <a href="#">Customer Safety</a>
            </li>
            <li>
              <a href="#">Fake mail</a>
            </li>
            <li>
              <a href="#">Report disruptive advertising</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs>
          <h3>For Companies</h3>
          <ul className="footer-style">
            <li>
              <a href="#">Open shop</a>
            </li>
            <li>
              <a href="#">View all stores</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Login for stores</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs>
          <h3>Terms</h3>
          <ul className="footer-style">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs>
          <h3>The Zoom</h3>
          <ul className="footer-style">
            <li>
              <a href="#">About the Zoom</a>
            </li>
            <li>
              <a href="#">Work on the Zoom</a>
            </li>
            <li>
              <a href="#">Contact us </a>
            </li>
          </ul>
        </Grid>
      </Grid>

      <Grid>
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} zoom marketplace - All Rights
            Reserved
          </p>
        </div>
      </Grid>
    </div>
  );
}

export default Footer;
