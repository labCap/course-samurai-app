import React from "react";
import { MessageChat } from "../../components/message-chat/message-chat";
import { MessageList } from "../../components/message-list/message-list";

import "./message.scss";

export const Message = () => {
	return (
		<div className="message">
			<MessageList />
			<MessageChat />
		</div>
	);
};
