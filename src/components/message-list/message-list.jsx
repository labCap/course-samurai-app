import React from "react";
import { MessageListItem } from "../message-list-item/message-list-item";

import "./message-list.scss";

export const MessageList = ({ item }) => {
	return (
		<ul className="message__list message-list">
			{item.map((i) => (
				<MessageListItem id={i.id} img={i.img} name={i.name} />
			))}
		</ul>
	);
};
