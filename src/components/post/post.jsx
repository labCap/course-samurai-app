import React from "react";

import "./post.scss";

export const Post = ({ mess }) => {
	return (
		<div className="post">
			<div className="post__img"></div>
			<div className="post__text">{mess}</div>
		</div>
	);
};
