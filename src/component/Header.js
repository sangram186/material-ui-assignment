import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'block'
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
          fontWeight: 700,

      },
      nav: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
        color: 'white',
        gap: '50px'
      }

}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className='width'>
          <Typography variant="h5" className={classes.title}>
            LOGO
          </Typography>

            <div className={classes.nav}>
            <>
                <Link className='nav-link' to={'/'}><Button className='nav-button' variant="outlined">Home</Button></Link>
                <Link className='nav-link' to={'/about'}><Button className='nav-button' variant="outlined">About Us</Button></Link>
                {/* <Link className='nav-link' to={'/users'}><Button className='nav-button' variant="outlined">User</Button></Link> */}
            </>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
