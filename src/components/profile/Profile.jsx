import React from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { Post } from './MyPosts/Post/Post';
export const Profile = () => {
   return (
      <div>
         <div className={classes.content}>
            <div>
               <img style={{width: "790px"}} src="https://www.bgoperator.ru/pr_img/1000787/20160930/39057527/marvel-img-worlds-of-adventure-dubai.jpg" />
            </div>
            <div >
               ava + dec
            </div>
            <MyPosts/>
         </div>

      </div>
   );
};