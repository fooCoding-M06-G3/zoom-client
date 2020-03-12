import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Security</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Customer Safety</a>
                </li>
                <li>
                  <a href="/">Fake mail</a>
                </li>
                <li>
                  <a href="/">Report disruptive advertising</a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>For Companies</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Open shop</a>
                </li>
                <li>
                  <a href="/">View all stores</a>
                </li>
                <li>
                  <a href="/">Marketing</a>
                </li>
                <li>
                  <a href="/">Login for stores</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Terms</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Terms of Use</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Cookies</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>The Zoom</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About the Zoom</a>
                </li>
                <li>
                  <a href="/">Work on the Zoom</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} zoom market place App - All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
