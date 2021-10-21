import React from "react";

export const TodoList = props => {
	return (
		<div className="container-fluid">
			<ul className="list-group">
				<li className="list-group-item">
					first Item
					<button className="delete-button">
						<i className="far fa-trash-alt"></i>
					</button>
				</li>
			</ul>
			<small className="li-counter text-muted">1 items left</small>
		</div>
	);
};
