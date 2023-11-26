import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
export const MyPosts = () => {
	return (
		<div className={classes.posts}>
			My posts
			<div>new post</div>
			<Post message="Hello" />
			<Post message="By by" />
		</div>
	);
};
