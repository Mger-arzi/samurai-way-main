import React, { FC } from "react";
import classes from "./../Dialogs.module.css";


export type MessageProps = {
    id: string;
    message: string;
};

export const Message: React.FC<MessageProps> = ({ message }) => {
    return <div className={classes.messege}> {message}</div>;
};
