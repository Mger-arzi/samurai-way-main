import React from "react";
import classes from "./MyPosts.module.css";
import { Post, PostType } from "./Post/Post";

export type MyPostDataType = {
    Posts: PostType[]
}
export const MyPosts = (props: MyPostDataType) => {

    let postsElement = props.Posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />)
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
