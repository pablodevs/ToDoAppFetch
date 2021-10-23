import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ErrorAlert } from "./erroralert.jsx";
import { TodoForm } from "./todoform.jsx";
import { ToDos } from "./toDos.jsx";

export const TodoList = () => {
	// Hooks
	const [todoLIs, setTodoLIs] = useState([]);

	// API Functions
	const updateTodoAPI = input => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "PUT",
			body: JSON.stringify([
				{ label: "Pablo", done: true },
				{ label: "Pablo2", done: false }
			]), // hardcoded
			headers: { "Content-Type": "application/json" }
		})
			.then(res => {
				if (!res.ok) {
					console.log("❌ Error with API:", res.statusText);
					showError();
					throw Error(res.statusText);
				} else {
					console.log(`✔️ 'PUT' status: ${res.status}`);
					getTodoFromAPI();
					return res.json();
				}
			})
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
	};

	const getTodoFromAPI = () => {
		// let newTodoLIs = [...todoLIs, input];

		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
			.then(res => {
				if (!res.ok) {
					console.log("❌ Error with API:", res.statusText);
					showError();
					throw Error(res.statusText);
				} else {
					console.log(`✔️ 'GET' status: ${res.status}`);
					return res.json();
				}
			})
			.then(data => {
				console.log("data?:", data);
			})
			.catch(error => console.log(error));

		// setTodoLIs(newTodoLIs);
	};

	// Functions
	const showError = () => {
		ReactDOM.render(<ErrorAlert />, document.querySelector("#alerts"));
	};

	const removeTodoLI = key => {
		todoLIs.splice(key, 1);
		setTodoLIs([...todoLIs]);
	};

	// Render
	return (
		<div className="container-fluid">
			<TodoForm createLI={updateTodoAPI} />
			<ul className="list-group">
				<ToDos listOfToDos={todoLIs} removeFunction={removeTodoLI} />
			</ul>
			<small className="li-counter text-muted">
				{todoLIs.length} tasks left
			</small>
		</div>
	);
};
