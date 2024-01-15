import React, { FC } from "react";
import classes from "./Dialogs.module.css";
import { Message, MessageProps } from "./message/Message";
import {  DialogItem, DialogItemType} from "./dialogsItem/DialogeItem";

type DialogsDataType = {
    DialogsData: DialogItemType[]
    MessagesData: MessageProps[]
}

export const Dialogs : React.FC<DialogsDataType> = ({DialogsData, MessagesData}) => {

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
