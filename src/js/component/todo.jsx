import React from "react";
import { TodoForm } from "./todoform.jsx";
import { TodoList } from "./todolist.jsx";

const Todo = props => {
	// Hooks

	// Functions

	// Render
	return (
		<div className="container">
			<h1>To-Do List</h1>
			<div className="todo-wrapper container-fluid p-0">
				<TodoList />
			</div>
		</div>
	);
};

export default Todo;
