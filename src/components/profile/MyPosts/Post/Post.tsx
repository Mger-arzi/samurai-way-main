import React, { FC } from "react";
import classes from "./Post.module.css";
import { PostsType } from "../../Profile";



export const Post = (props: PostsType ) => {
	return (
			<div className={classes.post}>{props.message}
                <div>like {props.likesCount}</div>
            </div>
	);
};
