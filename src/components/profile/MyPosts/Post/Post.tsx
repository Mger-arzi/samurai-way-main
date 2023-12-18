import React, { FC } from "react";
import classes from "./Post.module.css";

type PostTypeProps = {
    id: string
    message: string
    lekesCount: number
}

export const Post = (props: PostTypeProps ) => {
	return (
			<div className={classes.post}>{props.message}
                <div>like {props.lekesCount}</div>
            </div>
	);
};
