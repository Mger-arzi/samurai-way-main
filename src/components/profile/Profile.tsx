import React from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';

export let Posts = [
    { id: '1', message: 'Hello', likesCount: 12 },
    { id: '2', message: 'By by', likesCount: 13 },
]
export type PostsType = {
    id:string
    message:string
    likesCount:number
}


export const Profile = () => {
    return (
            <div className={classes.profile}>
                <ProfileInfo avatar='avatar'/>
                <MyPosts posts= {Posts}/>
            </div>

    );
};
