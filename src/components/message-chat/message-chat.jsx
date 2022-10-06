import React from "react";

import "./message-chat.scss";

export const MessageChat = () => {
	return (
		<div className="message__chat message-chat">
			<div className="message-chat__header">
				<button className="message-chat__btn ico-arrow-left"></button>
				<div className="message-chat__name">Viv</div>
				<button className="message-chat__settings ico-gear"></button>
			</div>

			<div className="message-chat__body">
				<div className="message-chat__user">
					<div className="message-chat__img"></div>
					<div className="message-chat__text">hi</div>
				</div>
				<div className="message-chat__user message-chat__user-you">
					<div className="message-chat__img">
						<img src="img/user.png" alt="" />
					</div>
					<div className="message-chat__text">hi</div>
				</div>
			</div>

			<div className="message-chat__footer">
				<input
					className="message-chat__input input"
					// name="chat-textarea"
					// id="chat-textarea"
				></input>
				<button
					className="message-chat__btn ico-arrow-left"
					type="submit"
				></button>
			</div>
		</div>
	);
};
