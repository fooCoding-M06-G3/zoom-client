import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import SearchBar from './SearchBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

  navlink: {
    marginLeft: 20,
    textDecoration: 'none',
    color: 'white',
    whiteSpace: 'nowrap',

  },
  title: {
    marginLeft: '5%',
    marginRight: '1%',
    fontSize: '1.4em'
  },
  search: {
    marginLeft: 0,
    marginRight: 'auto',
    width: '35%'

  },
  menu: {
    marginLeft: '1%',
    marginRight: '5%',
    width: '12%',
    justifyContent: 'space-between'
  },
}));

const TopNav = withStyles(() => ({
  root: {
    backgroundColor: '#03396c',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: 'auto',
  }
}
))(AppBar);


export default function Navbar() {


  const classes = useStyles();
  const logOut = () => localStorage.removeItem('userId');
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

        <SearchBar />
      </Toolbar>
      <Toolbar className={classes.menu}>
        {localStorage.getItem('userId') !== null ? <NavLink to='/signin' className={classes.navlink} onClick={() => logOut()}><Typography>Sign out</Typography></NavLink> :
          <NavLink to="/signin" className={classes.navlink}>
            <Typography>Sign In</Typography>
          </NavLink>
        }

        {localStorage.getItem('userId') !== null ? <NavLink to="/postitem" className={classes.navlink}><Typography>Post Ad</Typography></NavLink> :
          <NavLink to="/signup" className={classes.navlink}>
            <Typography>Register</Typography>
          </NavLink>
        }
      </Toolbar>
    </TopNav>
  );
}