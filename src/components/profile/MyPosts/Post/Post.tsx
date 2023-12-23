import React, { FC } from "react";
import classes from "./Post.module.css";

type PostTypeProps = {
    id: string
    message: string
    likesCount: number
}

export const Post = (props: PostTypeProps ) => {
	return (
			<div className={classes.post}>{props.message}
                <div>like {props.likesCount}</div>
            </div>
	);
};
