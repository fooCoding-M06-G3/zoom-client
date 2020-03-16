import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Link from "next/link";
import React, { Component } from "react";
// import InvertedButton from "./InvertedButton";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          className={classNames(classes.footerText, classes.footerSections)}
        >
          <Grid item xs={6} sm={3}>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <h4>Security</h4>
              <li>
                <Link
                  prefetch={true}
                  as="/contact"
                  href="/page?type=aboutPages&id=contact"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Customer Safety
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/ferpa"
                  href="/page?type=aboutPages&id=ferpa"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Fake mail
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/directions-and-attractions"
                  href="/page?type=aboutPages&id=directions-and-attractions"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Report disruptive advertising
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h4>For Companies</h4>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <li>
                <Link
                  prefetch={true}
                  as="/Open shop"
                  href="/page?type=aboutPages&id=contact"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Open shop
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/View all stores"
                  href="/page?type=aboutPages&id=ferpa"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    View all stores
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/Marketing"
                  href="/page?type=aboutPages&id=directions-and-attractions"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/Login for stores"
                  href="/page?type=aboutPages&id=non-discrimination"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Login for stores
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h4>Terms</h4>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <li>
                <Link
                  prefetch={true}
                  as="/Privacy Policy"
                  href="/page?type=aboutPages&id=contact"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/Terms of Use"
                  href="/page?type=aboutPages&id=ferpa"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Terms of Use
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/Cookies"
                  href="/page?type=aboutPages&id=directions-and-attractions"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Cookies
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h4>The Zoom</h4>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <li>
                <Link
                  prefetch={true}
                  as="/About the Zoom"
                  href="/page?type=aboutPages&id=contact"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    About the Zoom
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/Work on the Zoom"
                  href="/page?type=aboutPages&id=ferpa"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Work on the Zoom
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/Contact Us"
                  href="/page?type=aboutPages&id=directions-and-attractions"
                >
                  <a className={classes.white} style={{ fontWeight: 300 }}>
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={"span"}
          >
            &copy;{new Date().getFullYear()} zoom market place App - All Rights
          </Typography>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: 10,
    backgroundColor: "rgb(3, 57, 108)",
    // borderTop: "solid 3px #998643",
    paddingTop: "1rem",
    overflowX: "hidden"
  },
  footerSections: {
    margin: "10px 16px"
  },
  subFooter: {
    // backgroundColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: "rgb(3, 57, 108)",
    padding: "4px 16px 8px 16px",
    marginTop: "5px"
  },
  footerText: {
    color: "rgb(231, 225, 225)",
    fontSize: "18px",
    lineHeight: 1.5
  },

  white: {
    color: "rgb(231, 225, 225)"
  },
  flexContainer: {
    display: "flex"
  }
});

export default withStyles(styles)(Footer);
