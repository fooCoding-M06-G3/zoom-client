import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../Styles';
import { orange, yellow } from '@material-ui/core/colors';
import { AppBar, Typography, Toolbar, MenuItem, Button, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

function Navbar({ title, navLink1, navLink2 }) {

  const classes = useStyles();


  const ColorButton = withStyles(() => ({
    root: {
      backgroundColor: orange[700],
      '&:hover': {
        backgroundColor: orange[400],
      },
    },
  }))(Button);

  const SearchInput = withStyles(() => ({
    root: {
      color: '#333333'
    }
  }
  ))(InputBase);

  const TopNav = withStyles(() => ({
    root: {
      backgroundColor: '#1C2833'
    }
  }
  ))(AppBar);

  return (

    <TopNav elevation={1} position='fixed' className={classes.navbar} >

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <Toolbar className={classes.title}>
          <MenuItem >
            <Typography className={classes.titleText}><Link to='/' className={classes.link}>{title}</Link></Typography>
          </MenuItem>
        </Toolbar>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchInput
            placeholder="What are you looking for?"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        <div style={{ display: 'flex' }}>
          <Toolbar className={classes.toolbarNavlinks}>
            <MenuItem className={classes.menuitem}>
              <Typography><Link to='/signin' className={classes.navLink}>{navLink1}</Link></Typography>
            </MenuItem>
            <MenuItem className={classes.menuitem}>
              <ColorButton >
                <Link to='/additem' className={classes.navLink}>{navLink2}</Link>
              </ColorButton>
            </MenuItem>
          </Toolbar>
        </div>

      </div>
    </TopNav >

  );
}
export default Navbar;
