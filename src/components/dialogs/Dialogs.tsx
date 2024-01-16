import React, { FC } from "react";
import classes from "./Dialogs.module.css";
import { Message } from "./message/Message";
import {  DialogItem} from "./dialogsItem/DialogeItem";
import {  DialogsPageType, RootStateType } from "../../redux/state";



export const Dialogs : React.FC<DialogsPageType> = ({DialogsData,MessagesData}) => {

    let dialogsElements = DialogsData.map(el => <DialogItem id={el.id} name={el.name} />);
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
