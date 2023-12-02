import React, { FC } from "react";
import classes from "./Post.module.css";

type PostTypeProps = {
    message: string
    lekesCount: number
}

export const Post = (props: PostTypeProps ) => {
	return (
			<div className={classes.item}>{props.message}
                <div>like {props.lekesCount}</div>
            </div>
	);
};
