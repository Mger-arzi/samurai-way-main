import React, { FC } from "react";
import classes from "./../Dialogs.module.css";
import { MessageType } from "../../../redux/state";




export const Message: React.FC<MessageType> = ({ message }) => {
    return <div className={classes.messege}> {message}</div>;
};
