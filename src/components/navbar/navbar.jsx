import React from "react";
import { Link } from "react-router-dom";

// import "../../util/da.js";

import "./navbar.scss";

export const NavBar = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<Link to={"/"} className="nav__list-item active">
					<div className="profile-ico">
						<img src="img/user.png" alt="profile img" />
					</div>
					{/* <span className="ico-user"></span> */}
					<span className="nav__list-text">Profile</span>
				</Link>
				<Link to={"/messages"} className="nav__list-item">
					<span className="ico-comment"></span>
					<span className="nav__list-text">Messages</span>
				</Link>
				<Link to={"/news"} className="nav__list-item">
					<span className="ico-newspaper"></span>
					<span className="nav__list-text">News</span>
				</Link>
				<Link to={"/music"} className="nav__list-item">
					<span className="ico-music"></span>
					<span className="nav__list-text">Music</span>
				</Link>
				<Link to={"/settings"} className="nav__list-item">
					<span className="ico-gear"></span>
					<span className="nav__list-text">Settings</span>
				</Link>
			</ul>
		</nav>
	);
};
