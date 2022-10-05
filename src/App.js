import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import { Header } from "./components/header/header";
import { NavBar } from "./components/navbar/navbar";
import { Message } from "./pages/message/message";
import { Profile } from "./pages/profile/profile";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Header />

				<main className="main container">
					<NavBar />

					<section className="content">
						<Routes>
							<Route path="/" element={<Profile />} />
							<Route path="/messages" element={<Message />} />
						</Routes>
					</section>
				</main>
			</div>
		</Router>
	);
}

export default App;
