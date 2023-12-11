import React from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';




export const Profile = () => {
    return (
            <div className={classes.profile}>
                <ProfileInfo avatar='avatar'/>
                <MyPosts />
            </div>

    );
};
