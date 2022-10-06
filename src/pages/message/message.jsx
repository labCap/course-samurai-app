import React from "react";
import { NavLink } from "react-router-dom";

import "./message.scss";

const DIALOG = [
	{
		id: 1,
		img: null,
		name: "Viv",
		mess: { u1: "hi", u2: "hey" },
	},
	{ id: 2, img: "img/user.png", name: "LCap", mess: { u1: "hi", u2: "hi" } },
	{ id: 3, img: null, name: "admin", mess: { u1: "hi", u2: "hi" } },
];

const MessageListItem = ({ id, img, name }) => {
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

export const Message = () => {
	return (
		<div className="message">
			<ul className="message__list message-list">
				{DIALOG.map((i) => (
					<MessageListItem id={i.id} img={i.img} name={i.name} />
				))}
			</ul>

			<div className="message__chat message-chat">
				<div className="message-chat__header">
					<button className="message-chat__btn ico-arrow-left"></button>
					<div className="message-chat__name">{DIALOG[0].name}</div>
					<button className="message-chat__settings ico-gear"></button>
				</div>

				<div className="message-chat__body">
					<div className="message-chat__user">
						<div className="message-chat__img">{DIALOG[0].img}</div>
						<div className="message-chat__text">
							{DIALOG[0].mess.u2}
						</div>
					</div>
					<div className="message-chat__user message-chat__user-you">
						<div className="message-chat__img">
							<img src="img/user.png" alt="" />
						</div>
						<div className="message-chat__text">
							{DIALOG[0].mess.u1}
						</div>
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
