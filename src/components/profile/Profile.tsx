import React from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { PostType } from './MyPosts/Post/Post';

type ProfileDataType = {
    Posts: PostType[]

}


export const Profile: React.FC <ProfileDataType> = ({Posts}) => {
    return (
            <div className={classes.profile}>
                <ProfileInfo avatar='avatar'/>
                <MyPosts Posts= {Posts}/>
            </div>

    );
};
