import React, { FC } from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

export type DialogProps = {
    name: string;
    id: string;
};


export const DialogItem: React.FC<DialogProps> = ({ name, id }) => {
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
