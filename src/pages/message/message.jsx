import React from "react";

import "./message.scss";

export const Message = () => {
	return (
		<div className="message">
			<ul className="message__list message-list">
				<li className="message-list__item">
					<div className="message-list__img"></div>
					<div className="message-list__name">Viv</div>
					<span className="message-list__num-mark">1</span>
				</li>
			</ul>
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
		</div>
	);
};
