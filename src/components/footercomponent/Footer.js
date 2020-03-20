import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-center ">
      <Grid
        container
        spacing={0}
        // className={classNames(classes.footerText, classes.footerSections)}
      >
        <Grid item xs={6} sm={3}>
          <ul className="footer-style">
            <h3>Security</h3>
            <li>
              <a className="footer-white">Customer Safety</a>
            </li>
            <li>
              <a className="footer-white">Fake mail</a>
            </li>
            <li>
              <a className="footer-white">Report disruptive advertising</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3>For Companies</h3>
          <ul className="footer-style">
            <li>
              <a className="footer-white">Open shop</a>
            </li>
            <li>
              <a className="footer-white">View all stores</a>
            </li>
            <li>
              <a className="footer-white">Marketing</a>
            </li>
            <li>
              <a className="footer-white">Login for stores</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3>Terms</h3>
          <ul className="footer-style">
            <li>
              <a className="footer-white">Privacy Policy</a>
            </li>
            <li>
              <a className="footer-white">Terms of Use</a>
            </li>
            <li>
              <a className="footer-white">Cookies</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3>The Zoom</h3>
          <ul className="footer-style">
            <li>
              <a className="footer-white">About the Zoom</a>
            </li>
            <li>
              <a className="footer-white">Work on the Zoom</a>
            </li>
            <li>
              <a className="footer-white">Contact us </a>
            </li>
          </ul>
        </Grid>
      </Grid>

      <Grid>
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} zoom market place App - All Rights
            Reserved
          </p>
        </div>
      </Grid>
    </div>
  );
}

export default Footer;
