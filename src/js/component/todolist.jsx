import React, { useState } from "react";
import { TodoForm } from "./todoform.jsx";
import { ToDos } from "./toDos.jsx";

export const TodoList = () => {
	// Hooks
	const [todoLIs, setTodoLIs] = useState([]);

	// Functions
	const addTodoLI = input => {
		let newTodoLIs = [...todoLIs, input];
		setTodoLIs(newTodoLIs);
	};

	const removeTodoLI = key => {
		todoLIs.splice(key, 1);
		setTodoLIs([...todoLIs]);
	};

	// Render
	return (
		<div className="container-fluid">
			<TodoForm createLI={addTodoLI} />
			<ul className="list-group">
				<ToDos listOfToDos={todoLIs} removeFunction={removeTodoLI} />
			</ul>
			<small className="li-counter text-muted">
				{todoLIs.length} tasks left
			</small>
		</div>
	);
};
