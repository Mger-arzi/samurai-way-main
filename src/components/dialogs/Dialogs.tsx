import React from 'react';
import classes from './Dialogs.module.css'
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Mger
                </div>
                <div className={classes.dialog}>
                    David
                </div>
                <div className={classes.dialog}>
                    Violetta
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Casha
                </div>
                <div className={classes.dialog}>
                    Artem
                </div>
                <div className={classes.dialog}>
                    Dimych
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
