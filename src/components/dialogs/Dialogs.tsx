import React, { FC } from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { message } from "antd";

type DialogProps = {
    name: string;
    id: string;
};
type MessageProps = {
    id: string;
    message: string;
};

const Dialog: React.FC<DialogProps> = ({ name, id }) => {
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
const Message: React.FC<MessageProps> = ({ message }) => {
    return <div className={classes.messege}> {message}</div>;
};

export const Dialogs = () => {
    let DialogsData = [
        { id: "1", name: "Mger" },
        { id: "2", name: "David" },
        { id: "3", name: "Violetta" },
        { id: "4", name: "Andrey" },
        { id: "5", name: "Sasha" },
        { id: "6", name: "Davit" },
    ];
    let MessagesData = [
        { id: "1", message: "Lorem, ipsum dolor.meM" },
        { id: "2", message: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
        { id: "3", message: "Violetta" },
        { id: "4", message: "Lorem ipsum dolor sit." },
        { id: "5", message: "Sasha" },
        { id: "6", message: "Davit" },
    ];

    let dialogsElements = DialogsData.map(el => <Dialog id={el.id} name={el.name} />);
    let messagesElement = MessagesData.map(el => <Message id={el.id} message={el.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messeges}>
                {messagesElement}
            </div>
        </div>
    );
};
