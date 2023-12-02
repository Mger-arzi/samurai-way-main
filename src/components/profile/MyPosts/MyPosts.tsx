import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
export const MyPosts = () => {
	return (
		<div className={classes.posts}>
			My posts
			<div>new post</div>
			<Post message="Hello" lekesCount={12} />
			<Post message="By by"  lekesCount={0}/>
		</div>
	);
};
