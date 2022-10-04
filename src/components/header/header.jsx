import React from "react";

import "./header.scss";

export const Header = ({ openMenu, openingMenu }) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="ico-logo"></div>
					<div
						className={openMenu ? "ico-menu menu-open" : "ico-menu"}
						onClick={openingMenu}
					>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};
