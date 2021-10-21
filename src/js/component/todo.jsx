import React from "react";
import { TodoForm } from "./todoform.jsx";
import { TodoList } from "./todolist.jsx";

const Todo = props => {
	return (
		<div className="container">
			<h1>To-Do List</h1>
			<div className="todo-wrapper container-fluid p-0">
				<TodoForm />
				<TodoList />
			</div>
		</div>
	);
};

export default Todo;
