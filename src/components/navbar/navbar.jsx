import React from "react";
import { NavLink } from "react-router-dom";

// import "../../util/da.js";

import "./navbar.scss";

export const NavBar = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<NavLink to={"/profile"} className="nav__list-item">
					<div className="profile-ico">
						<img src="img/user.png" alt="profile img" />
					</div>
					{/* <span className="ico-user"></span> */}
					<span className="nav__list-text">Profile</span>
				</NavLink>
				<NavLink to={"/messages"} className="nav__list-item">
					<span className="ico-comment"></span>
					<span className="nav__list-text">Messages</span>
				</NavLink>
				<NavLink to={"/news"} className="nav__list-item">
					<span className="ico-newspaper"></span>
					<span className="nav__list-text">News</span>
				</NavLink>
				<NavLink to={"/music"} className="nav__list-item">
					<span className="ico-music"></span>
					<span className="nav__list-text">Music</span>
				</NavLink>
				<NavLink to={"/settings"} className="nav__list-item">
					<span className="ico-gear"></span>
					<span className="nav__list-text">Settings</span>
				</NavLink>
			</ul>
		</nav>
	);
};
