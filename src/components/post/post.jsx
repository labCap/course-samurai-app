import React from "react";

import "./post.scss";

export const Post = ({ userLogo, mess, img }) => {
	return (
		<div className="post">
			<div className="post__body">
				<div className="post__user-logo">
					<img src={userLogo} alt="" />
				</div>

				<div className="post__text">{mess}</div>

				{img ? (
					<div className="post__img">
						<img src={img} alt="post-img" />
					</div>
				) : null}
			</div>
			<div className="post__footer">
				<span className="post__like">
					<span className="ico-heart"></span>
					<span className="post__num">20</span>
				</span>
				<span className="post__save">
					<span className="ico-bookmark"></span>
					<span className="post__num">20</span>
				</span>
			</div>
		</div>
	);
};
