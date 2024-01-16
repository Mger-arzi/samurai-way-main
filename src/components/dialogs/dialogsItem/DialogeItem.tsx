import React, { FC } from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogItemType } from "../../../redux/state";




export const DialogItem: React.FC<DialogItemType> = ({ name, id }) => {
    let path = "/dialogs/" + id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>
                {" "}
                {name}{" "}
            </NavLink>
        </div>
    );
};
