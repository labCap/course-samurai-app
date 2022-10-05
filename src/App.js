import React from "react";

import "./App.scss";

import { Header } from "./components/header/header";
import { NavBar } from "./components/navbar/navbar";
import { Message } from "./pages/message/message";
import { Profile } from "./pages/profile/profile";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="main container">
				{/* <div className=""> */}
				{/* <div className="main__inner container"> */}
				<NavBar />
				<section className="content">
					{/* <Profile /> */}
					<Message />
				</section>
				{/* </div> */}
				{/* </div> */}
			</main>
		</div>
	);
}

export default App;
