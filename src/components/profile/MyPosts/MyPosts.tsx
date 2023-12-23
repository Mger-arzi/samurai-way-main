import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { message } from 'antd';
export const MyPosts = () => {
    let Posts = [
        { id: '1', message: 'Hello',likesCount: 12 },
        { id: '2', message: 'By by' , likesCount: 13 },
    ]
    let postsElement = Posts.map(el => <Post id = {el.id} message={el.message} likesCount={el.likesCount} />)
	return (
		<div className={classes.posts}>
			<h3>My posts</h3>
			<div>new post</div>
            <div>
                <textarea/>
            </div>
            <div>
            <button> add Post</button>
            </div>
			{postsElement}
		</div>
	);
};
