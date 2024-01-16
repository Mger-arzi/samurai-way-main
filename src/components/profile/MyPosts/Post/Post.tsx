import React, { FC } from "react";
import classes from "./Post.module.css";
import { PostType } from "../../../../redux/state";



export const Post : React.FC <PostType> = ({ message,likesCount} ) => {
	return (
			<div className={classes.post}>{message}
                <div>like {likesCount}</div>
            </div>
	);
};
