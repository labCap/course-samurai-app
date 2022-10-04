import React from "react";

import "./post.scss";

export const Post = ({ mess, img }) => {
	return (
		<div className="post">
			<div className="post__img">
				<img src={img} alt="" />
			</div>
			<div className="post__text">{mess}</div>
		</div>
	);
};
