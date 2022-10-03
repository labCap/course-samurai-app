import React from "react";

import "./user.scss";

export const User = () => {
	return (
		<div className="user">
			<div className="user__logo">
				<img src="img/user.png" alt="user-logo" />
			</div>

			<div className="user__info">
				<h1 className="user__name title">Name</h1>

				<ul className="user__list">
					<li>DoB</li>
					<li>Location</li>
					<li>education</li>
					<li>web-site</li>
				</ul>
			</div>
		</div>
	);
};
