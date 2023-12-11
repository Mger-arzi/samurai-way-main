import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
export const MyPosts = () => {
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
			<Post message="Hello" lekesCount={12} />
			<Post message="By by"  lekesCount={0}/>
		</div>
	);
};
