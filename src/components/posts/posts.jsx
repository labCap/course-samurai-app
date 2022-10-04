import React from "react";

import { Post } from "../post/post";

import "./posts.scss";

const userImg = "img/user.png";

const POSTS = [
	{ mess: "hi", img: userImg },
	{
		mess: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, maiores!",
		img: userImg,
	},
	{
		mess: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		img: userImg,
	},
	{
		mess: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odio, numquam assumenda tempora libero sapiente dolor, nihil eaque ducimus ratione voluptatibus molestiae hic exercitationem. Qui dolor esse optio velit reiciendis!",
		img: userImg,
	},
	{ mess: "Lorem, ipsum dolor.", img: userImg },
	{
		mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci impedit facilis natus sequi earum!",
		img: userImg,
	},
];

export const Posts = () => {
	return (
		<div className="posts">
			<h2 className="posts__title title">Posts</h2>
			{POSTS.map((item) => (
				<Post mess={item.mess} img={item.img} />
			))}
		</div>
	);
};
