import React from "react";
import { AddPost } from "../add-post/add-post";

import "./user.scss";

export const User = () => {
	return (
		<div className="user">
			<div className="user__inner">
				<div className="user__logo">
					<img src="img/user.png" alt="user-logo" />
				</div>

				<div className="user__info user-info">
					<div className="user-info__header">
						<h1 className="user__name title">LCap</h1>
						<ul className="user__sub user-sub">
							<li className="user-sub__item">
								<b style={{ color: "lightseagreen" }}>20</b>
								<div>posts</div>
							</li>

							<li className="user-sub__item">
								<b>20</b>
								<div>subscriptions</div>
							</li>

							<li className="user-sub__item">
								<b>20</b>
								<div>subscribers</div>
							</li>

							<li className="user-sub__item">
								<b style={{ color: "tomato" }}>20</b>
								<div>like</div>
							</li>
						</ul>
					</div>

					<div className="user-info__body">
						<ul className="user__list">
							<li>birthday: 01/01/2000</li>
							<li>Location: Mars</li>
							{/* <li>education</li> */}
							<li>
								web-site:{" "}
								<a
									className="link"
									href="https://course-samurai-app-kzcb.vercel.app/"
								>
									site
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="user__add-post">
				<AddPost />
			</div>
		</div>
	);
};
