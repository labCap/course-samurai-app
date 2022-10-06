import React from "react";

import "./message-list.scss";

const MessageListItem = ({ img, name, numMess }) => {
	return (
		<li className="message-list__item">
			<div className="message-list__img">
				{img ? <img src={img} alt="" /> : null}
			</div>
			<div className="message-list__name">{name}</div>
			{numMess ? (
				<span className="message-list__num-mark">{numMess}</span>
			) : null}
		</li>
	);
};

export const MessageList = () => {
	return (
		<ul className="message__list message-list">
			<MessageListItem img={null} name={"Viv"} numMess={1} />
			<MessageListItem img={"img/user.png"} name={"LCap"} numMess={10} />
		</ul>
	);
};
