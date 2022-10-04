import React from "react";

// import "../../util/da.js";

import "./navbar.scss";

export const NavBar = ({ openMenu }) => {
	return (
		<nav className={openMenu ? "nav menu-open" : "nav"}>
			<ul className="nav__list">
				<li className="nav__list-item active">
					<a href="#">Profile</a>
				</li>
				<li className="nav__list-item">
					<a href="#">Messages</a>
				</li>
				<li className="nav__list-item">
					<a href="#">News</a>
				</li>
				<li className="nav__list-item">
					<a href="#">Music</a>
				</li>
				<li className="nav__list-item">
					<a href="#">Settings</a>
				</li>
			</ul>
		</nav>
	);
};
