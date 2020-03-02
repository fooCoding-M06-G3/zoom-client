import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'relative',
    },
  },

  navlink: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      position: 'relative',
      textDecoration: 'none',
      color: 'white',
      whiteSpace: 'nowrap',
    },
  },
  toolbar: {
    backgroundColor: grey[900],
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5">
            Zoom
          </Typography>
          <SearchBar />

          <NavLink to="/signin" className={classes.navlink}>
            Sign in
          </NavLink>
          <NavLink to="/signup" className={classes.navlink}>
            Sign up
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
