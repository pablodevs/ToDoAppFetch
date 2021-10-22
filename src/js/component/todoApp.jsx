import React from "react";
import { TodoList } from "./todolist.jsx";

const TodoApp = () => {
	// Render
	return (
		<div className="container">
			<h1>To Do List</h1>
			<div className="todo-wrapper container-fluid p-0 mb-5">
				<TodoList />
			</div>
		</div>
	);
};

export default TodoApp;
