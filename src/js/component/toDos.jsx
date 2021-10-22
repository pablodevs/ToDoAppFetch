import React from "react";
import { PropTypes } from "prop-types";

export const ToDos = props => {
	// Functions
	const handleDelete = key => {
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

	const handleClick = e => {
		e.target.classList.contains("todo-done")
			? e.target.classList.remove("todo-done")
			: e.target.classList.add("todo-done");
	};

	// Render
	return props.listOfToDos.map((toDo, idx) => {
		return (
			<li
				key={idx}
				className="list-group-item"
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{toDo}
				<button
					onClick={() => handleDelete(idx)}
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
