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
    '&:hover': {
      textDecoration: 'none',
      color: '#CCC'

    }
  },
  registerLink: {
    marginRight: 30,
    textDecoration: 'none',
    color: '#FFF',
    whiteSpace: 'nowrap',
    '&:hover': {
      textDecoration: 'none',
      color: '#CCC'

    }
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
    marginRight: '5%',
  },
}));

const TopNav = withStyles(() => ({
  root: {
    backgroundColor: '#03396c',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    margin: 'auto',
  },
}))(AppBar);

export default function Navbar(props) {
  const classes = useStyles();
  const logOut = () => localStorage.removeItem('userId');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userId') !== null ? true : false);

  return (
    <TopNav>

      <Toolbar className={classes.title}>
        <Typography className={classes.title}>
          <NavLink to="/" className={classes.navlink}>
            zoom
          </NavLink>
        </Typography>
      </Toolbar>

      <Toolbar className={classes.search}>
        <ProductFilterBar />
      </Toolbar>

      <Toolbar className={classes.menu}>
        {isLoggedIn ? (
          <NavLink to="/" className={classes.registerLink} onClick={() => {
            logOut();
            setIsLoggedIn(!isLoggedIn);
          }
          }>
            <Typography>Sign out</Typography>
          </NavLink>
        ) : (
            <NavLink to="/signin" className={classes.registerLink}>
              <Typography>Login</Typography>
            </NavLink>
          )}

        <NavLink to="/adminpanel" className={classes.navlink}>
          <Button variant="contained" color="secondary">Dashboard</Button>
        </NavLink>
      </Toolbar>

    </TopNav>
  );
}
