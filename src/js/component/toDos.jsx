import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const ToDos = props => {
	// Functions
	const handleClick = key => {
		props.removeFunction(key);
	};

	const handleMouseEnter = e => {
		e.target.classList.add("li-highlighted");
		e.target.lastChild.classList.remove("hide-button");
	};

	const handleMouseLeave = e => {
		e.target.classList.remove("li-highlighted");
		e.target.lastChild.classList.add("hide-button");
	};

	// Render
	return props.listOfToDos.map((toDo, idx) => {
		return (
			<li
				key={idx}
				className="list-group-item"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{toDo}
				<button
					onClick={() => handleClick(idx)}
					className="delete-button hide-button">
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
