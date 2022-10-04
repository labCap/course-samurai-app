import React from "react";

// import "../../util/da.js";

import "./navbar.scss";

export const NavBar = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__list-item active">
					<div className="profile-ico">
						<img src="img/user.png" alt="profile img" />
					</div>
					{/* <span className="ico-user"></span> */}
					<a href="#">Profile</a>
				</li>
				<li className="nav__list-item">
					<span className="ico-comment"></span>
					<a href="#">Messages</a>
				</li>
				<li className="nav__list-item">
					<span className="ico-newspaper"></span>
					<a href="#">News</a>
				</li>
				<li className="nav__list-item">
					<span className="ico-music"></span>
					<a href="#">Music</a>
				</li>
				<li className="nav__list-item">
					<span className="ico-gear"></span>
					<a href="#">Settings</a>
				</li>
			</ul>
		</nav>
	);
};
