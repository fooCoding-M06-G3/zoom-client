import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../Styles';
import { AppBar, Typography, Toolbar, MenuItem, Button, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

function Navbar({ title, navLink1, navLink2 }) {

  const classes = useStyles();


  const ColorButton = withStyles(() => ({
    root: {
      color: '#000',
      backgroundColor: '#00e676',
      '&:hover': {
        backgroundColor: '#76ff03',
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
      backgroundColor: '#1C2833',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      height: '10vh',
      margin: 'auto'
    }
  }
  ))(AppBar);

  return (
    <TopNav >
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
          placeholder="What are you looking for ?"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Toolbar>
          <MenuItem className={classes.menuitem}>
            <Typography><Link to='/signin' className={classes.navLink}>{navLink1}</Link></Typography>
          </MenuItem>
          <MenuItem className={classes.menuitem}>
            <ColorButton >
              <Link to='/additem' style={{ textDecoration: 'none' }}>{navLink2}</Link>
            </ColorButton>
          </MenuItem>
        </Toolbar>
      </div>
    </TopNav >
  );
}
export default Navbar;
