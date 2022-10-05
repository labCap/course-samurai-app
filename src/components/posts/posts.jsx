import React from "react";

import { Post } from "../post/post";

import "./posts.scss";

const userImg = "img/user.png";

const POSTS = [
	{
		userLogo: userImg,
		mess: "hi",
		img: "",
	},
	{
		userLogo: userImg,
		mess: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, maiores!",
		img: "img/post-img/photo_2022-09-17_21-06-38.jpg",
	},
	{
		userLogo: userImg,
		mess: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		img: "img/post-img/photo_2022-10-05_23-38-59.jpg",
	},
	{
		userLogo: userImg,
		mess: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odio, numquam assumenda tempora libero sapiente dolor, nihil eaque ducimus ratione voluptatibus molestiae hic exercitationem. Qui dolor esse optio velit reiciendis!",
		img: "img/post-img/photo_2022-08-23_14-26-36.jpg",
	},
	{
		userLogo: userImg,
		mess: "Lorem, ipsum dolor.",
		img: "",
	},
	{
		userLogo: userImg,
		mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci impedit facilis natus sequi earum!",
		img: "",
	},
];

export const Posts = () => {
	return (
		<div className="posts">
			<h2 className="posts__title title">Posts</h2>
			{POSTS.map((item) => (
				<Post
					userLogo={item.userLogo}
					mess={item.mess}
					img={item.img}
				/>
			))}
		</div>
	);
};
