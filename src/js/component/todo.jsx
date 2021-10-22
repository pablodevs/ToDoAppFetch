import React from "react";
import { TodoList } from "./todolist.jsx";

const Todo = () => {
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
