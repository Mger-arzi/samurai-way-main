import React from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ProfilePageType, RootStateType } from '../../redux/state';


export const Profile: React.FC <ProfilePageType> = ({Posts}) => {
    return (
            <div className={classes.profile}>
                <ProfileInfo avatar='avatar'/>
                <MyPosts Posts= {Posts}/>
            </div>

    );
};
