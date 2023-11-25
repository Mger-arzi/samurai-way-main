import React, { FC } from "react";
import classes from "./Post.module.css";

type PostTypeProps = {
   message: string
}

export const Post:FC  <PostTypeProps> = (message)=> {
	return (
			<div className={classes.item}>{message}</div>
	);
};
