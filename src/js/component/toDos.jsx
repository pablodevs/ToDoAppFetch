import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const ToDos = props => {
	// Hooks
	const [mouseOver, setMouseOver] = useState("");

	// Functions
	const handleClick = key => {
		props.removeFunction(key);
	};

	// Render
	return props.listOfToDos.map((toDo, idx) => {
		return (
			<li
				key={idx}
				className={
					"list-group-item" + (mouseOver ? " li-highlighted" : "")
				}
				onMouseOver={() => setMouseOver(true)}
				onMouseOut={() => setMouseOver(false)}>
				{toDo}
				<button
					onClick={() => handleClick(idx)}
					className={
						"delete-button" + (mouseOver ? "" : " hide-button")
					}>
					<i className="far fa-trash-alt"></i>
				</button>
			</li>
		);
	});
};

ToDos.propTypes = {
	listOfToDos: PropTypes.array,
	removeFunction: PropTypes.func
};
