import React, { FC } from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DialogProps = {
    name: string
    id: string
}
type MessageProps = {
    message: string
}

const Dialog: React.FC<DialogProps> = ({ name, id }) => {
    let path = '/dialogs/' + id
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>  {name}   </NavLink>
        </div>
    )
}
const Message: React.FC<MessageProps> = ({message,}) => {

    return <div className={classes.messege}> {message}</div>

}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog id='1' name='Mger' />
                <Dialog id='2' name='David' />
                <Dialog id='3' name='Violetta' />
                <Dialog id='4' name='Andrey' />
                <Dialog id='5' name='Sasha' />
                <Dialog id='6' name='Davit' />
            </div>
            <div className={classes.messeges}>
                <Message message='Lorem, ipsum dolor.meM'/>
                <Message message='Lorem, ipsum dolor sit amet consectetur adipisicing.'/>
                <Message message='Lorem ipsum dolor sit.'/>

            </div>
        </div>
    );
};
