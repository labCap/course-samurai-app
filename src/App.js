import React from "react";

import "./App.scss";

import { Header } from "./components/header/header";
import { NavBar } from "./components/navbar/navbar";
import { Profile } from "./pages/profile";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
				{/* <div className="container"> */}
				<div className="main__inner container">
					<NavBar />
					<section className="content">{/* <Profile /> */}</section>
				</div>
				{/* </div> */}
			</main>
		</div>
	);
}

export default App;
