import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import ProductFilterBar from './ProductFilterBar';

const useStyles = makeStyles(theme => ({

  navlink: {
    textDecoration: 'none',
    color: '#FFF',
    whiteSpace: 'nowrap',
  },
  title: {
    marginLeft: '5%',
    marginRight: '1%',
    fontSize: '1.4em',

  },
  search: {
    marginLeft: 0,
    marginRight: 'auto',
    width: '35%',
  },
  menu: {
    marginLeft: 0,
    marginRight: '5%',
    width: '15%',
    justifyContent: 'space-between',
  },
}));

const TopNav = withStyles(() => ({
  root: {
    backgroundColor: '#03396c',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: 'auto',
  },
}))(AppBar);

export default function Navbar() {
  const classes = useStyles();
  const logOut = () => localStorage.removeItem('userId');
  const refreshPage = () => window.location.reload();

  return (
    <TopNav>

      <Toolbar className={classes.title}>
        <Typography className={classes.title}>
          <NavLink to="/" className={classes.navlink}>
            ZOOM
          </NavLink>
        </Typography>
      </Toolbar>

      <Toolbar className={classes.search}>
        <ProductFilterBar />
      </Toolbar>

      <Toolbar className={classes.menu}>
        {localStorage.getItem('userId') !== null ? (
          <NavLink to="/" className={classes.navlink} onClick={() => {
            logOut();
            refreshPage()
          }
          }>
            <Typography>Sign out</Typography>
          </NavLink>
        ) : (
            <NavLink to="/signin" className={classes.navlink}>
              <Typography>Sign In</Typography>
            </NavLink>
          )}


        <NavLink to="/postitem" className={classes.navlink}>
          <Button variant="contained" color="primary">Post Ad</Button>
        </NavLink>

      </Toolbar>

    </TopNav>
  );
}
