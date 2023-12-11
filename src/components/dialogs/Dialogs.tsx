import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/Mger' activeClassName={classes.active}>Mger   </NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink to='/dialogs/David' activeClassName={classes.active}> David</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/Violetta' activeClassName={classes.active}>Violetta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/Andrey' activeClassName={classes.active}>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/Casha' activeClassName={classes.active}>Casha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/Artem' activeClassName={classes.active}>Artem</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/Dimych' activeClassName={classes.active}>Dimych</NavLink>
                </div>
            </div>
            <div className={classes.messeges}>
                <div className={classes.messege}>Lorem, ipsum dolor.</div>
                <div className={classes.messege}>Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
                <div className={classes.messege}>Lorem ipsum dolor sit.</div>
            </div>
        </div>
    );
};
