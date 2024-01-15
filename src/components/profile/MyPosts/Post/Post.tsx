import React, { FC } from "react";
import classes from "./Post.module.css";


export type PostType = {
    id:string
    message:string
    likesCount:number
} 
export const Post : React.FC <PostType> = ({id, message,likesCount} ) => {
	return (
			<div className={classes.post}>{message}
                <div>like {likesCount}</div>
            </div>
	);
};
