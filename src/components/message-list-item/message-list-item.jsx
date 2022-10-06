import React from "react";
import { NavLink } from "react-router-dom";

import "./message-list-item.scss";

export const MessageListItem = ({ id, img, name }) => {
	return (
		<NavLink to={`/message/${id}`} className="message-list__item">
			<div className="message-list__img">
				{img ? <img src={img} alt="" /> : null}
			</div>
			<div className="message-list__name">{name}</div>
			{/* {numMess ? (
				<span className="message-list__num-mark">{numMess}</span>
			) : null} */}
		</NavLink>
	);
};
