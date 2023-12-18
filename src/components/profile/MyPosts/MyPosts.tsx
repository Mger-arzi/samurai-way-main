import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { message } from 'antd';
export const MyPosts = () => {
    let PostData = [
        { id: '1', message: 'Hello',lekesCount: 12 },
        { id: '2', message: 'By by' , lekesCount: 13 },
    ]
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
			<Post id = {PostData[0].id} message={PostData[0].message} lekesCount={PostData[0].lekesCount} />
			<Post id = {PostData[1].id} message={PostData[1].message}  lekesCount={PostData[1].lekesCount}/>
		</div>
	);
};
