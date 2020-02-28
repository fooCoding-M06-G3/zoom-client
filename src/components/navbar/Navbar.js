import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../Styles'
import { AppBar, Typography, Toolbar, MenuItem, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

function Navbar({ title, navLink1, navLink2 }) {

  const classes = useStyles();

  return (

    <AppBar elevation={1} position='fixed' className={classes.navbar} >

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
          <InputBase
            placeholder="What are you looking for?"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search', color: 'primary' }}
          />
        </div>

        <div style={{ display: 'flex' }}>
          <Toolbar className={classes.toolbarNavlinks}>
            <MenuItem className={classes.menuitem}>
              <Typography><Link to='/products' className={classes.navLink}>{navLink1}</Link></Typography>
            </MenuItem>
            <MenuItem className={classes.menuitem}>
              <Typography ><Link to='/products' className={classes.navLink}>{navLink2}</Link></Typography>
            </MenuItem>
          </Toolbar>
        </div>

      </div>



    </AppBar >

  );
}
export default Navbar;
