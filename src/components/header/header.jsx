import React from "react";

import "./header.scss";

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="ico-logo"></div>
					{/* <div className="header__profile header-profile">
						<div className="header-profile__logo">
							<img src="img/user.png" alt="user-logo" />
						</div>
					</div>
					 */}
					{/* <div
						className={openMenu ? "ico-menu menu-open" : "ico-menu"}
						onClick={openingMenu}
					>
						<span></span>
					</div> */}
				</div>
			</div>
		</header>
	);
};
