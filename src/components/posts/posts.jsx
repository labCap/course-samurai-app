import React from "react";

import { Post } from "../post/post";

import "./posts.scss";

export const Posts = () => {
	return (
		<div className="posts">
			<h2 className="posts__title title">Posts</h2>
			<Post />
		</div>
	);
};
