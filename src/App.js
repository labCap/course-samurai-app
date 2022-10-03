import { Banner } from "./components/banner/banner";
import { Header } from "./components/header/header";
import { NavBar } from "./components/navbar/navbar";
import { User } from "./components/user/user";

import "./App.scss";
import { Posts } from "./components/posts/posts";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="main container">
				{/* <div className=""> */}
				<NavBar />
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
