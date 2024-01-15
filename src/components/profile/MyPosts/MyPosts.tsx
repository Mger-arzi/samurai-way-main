import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostsType } from "../Profile";

export type PostType = {
    posts: PostsType[]
}
export const MyPosts = (props: PostType) => {

    let postsElement = props.posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />)
    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>new post</div>
            <div>
                <textarea />
            </div>
            <div>
                <button> add Post</button>
            </div>
            {postsElement}
        </div>
    );
};
