import React from "react";
import { POSTS } from "../../STATE.js";

import { Post } from "../post/post";

import "./posts.scss";

export const Posts = () => {
	return (
		<div className="posts">
			<h2 className="posts__title title">Posts</h2>
			{POSTS.map((item) => (
				<Post
					userLogo={item.userLogo}
					mess={item.mess}
					img={item.img}
				/>
			))}
		</div>
	);
};
