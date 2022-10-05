import React from "react";
import { Link } from "react-router-dom";

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
					<Link to={"/"}>Profile</Link>
				</li>
				<li className="nav__list-item">
					<span className="ico-comment"></span>
					<Link to={"/messages"}>Messages</Link>
				</li>
				<li className="nav__list-item">
					<span className="ico-newspaper"></span>
					<Link to={"/news"}>News</Link>
				</li>
				<li className="nav__list-item">
					<span className="ico-music"></span>
					<Link to={"/music"}>Music</Link>
				</li>
				<li className="nav__list-item">
					<span className="ico-gear"></span>
					<Link to={"/settings"}>Settings</Link>
				</li>
			</ul>
		</nav>
	);
};
