import React from "react";

import { Banner } from "../components/banner/banner";
import { Posts } from "../components/posts/posts";
import { User } from "../components/user/user";

export const Profile = () => {
	return (
		<>
			<Banner />

			<User />

			<Posts />
		</>
	);
};
