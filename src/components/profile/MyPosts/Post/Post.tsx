import React, { FC } from "react";
import classes from "./Post.module.css";

type PostTypeProps = {
   message: string
}

export const Post = (props: PostTypeProps ) => {
	return (
			<div className={classes.item}>{props.message}</div>
	);
};
