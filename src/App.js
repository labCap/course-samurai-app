import React from "react";

import { Banner } from "./components/banner/banner";
import { Header } from "./components/header/header";
import { NavBar } from "./components/navbar/navbar";
import { Posts } from "./components/posts/posts";
import { User } from "./components/user/user";

import "./App.scss";

function App() {
	const [openMenu, setOpenMenu] = React.useState(false);

	const openingMenu = () => {
		setOpenMenu(!openMenu);
		document.body.classList.add("lock");
	};

	return (
		<div className="wrapper">
			<Header openMenu={openMenu} openingMenu={openingMenu} />

			<main className="main container">
				{/* <div className=""> */}
				<NavBar openMenu={openMenu} />
				<section className="content">
					<Banner />

					<User />

					<Posts />
				</section>
				{/* </div> */}
			</main>
		</div>
	);
}

export default App;
