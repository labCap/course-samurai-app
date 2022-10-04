import React from "react";

import "./add-post.scss";

export const AddPost = () => {
	return (
		<form action="#" className="add-post form">
			<textarea
				name="mess"
				id="add-post__mess"
				className="add-post__mess form__textarea"
				placeholder="Enter the message"
			></textarea>
			<button type="submit" className="add-post__btn form__btn">
				Add
			</button>
		</form>
	);
};
