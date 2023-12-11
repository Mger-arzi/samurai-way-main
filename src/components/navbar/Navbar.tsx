import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}> Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink} >Mesege</NavLink>
            </div>
            <div className={classes.item}>
                <a >News</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>settings</a>
            </div>
        </nav>
    );
};
