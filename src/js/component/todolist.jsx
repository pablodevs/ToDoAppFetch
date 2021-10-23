import React, { useEffect, useState } from "react";
import { TodoForm } from "./todoform.jsx";
import { ToDos } from "./toDos.jsx";
import { Spinner } from "./spinner.jsx";

export const TodoList = () => {
	// Hooks
	const [todoLIs, setTodoLIs] = useState([]);
	const [loading, setLoading] = useState(false); // Spinner when loading... content

	useEffect(() => {
		getTodosFromAPI();
	}, []);

	// API Functions
	const updateTodosAPI = input => {
		let newTodoLIs = [];
		if (typeof input === "string")
			newTodoLIs = [...todoLIs, { label: input, done: false }];
		else if (typeof input === "number") {
			todoLIs.splice(input + 1, 1);
			newTodoLIs = [...todoLIs];
		} else {
			console.log("Error, todo must be a string or number");
			return null;
		}

		setLoading(true);

		fetch("https://assets.breatheco.de/apis/fake/todos/user/pablo", {
			method: "PUT",
			body: JSON.stringify([...newTodoLIs]),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => {
				if (!res.ok) {
					console.log("❌ Error with API:", res.statusText);
					throw Error(res.statusText);
				} else {
					console.log(`✔️ 'PUT' status: ${res.status}`);
					return res.json();
				}
			})
			.then(response => {
				console.log("Success:", response.result);
				getTodosFromAPI();
				setLoading(false);
			})
			.catch(error => console.error("Error:", error));
	};

	const getTodosFromAPI = () => {
		setLoading(true);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/pablo")
			.then(res => {
				if (!res.ok) {
					console.log("❌ Error with API:", res.statusText);
					throw Error(res.statusText);
				} else {
					console.log(`✔️ 'GET' status: ${res.status}`);
					return res.json();
				}
			})
			.then(data => {
				setTodoLIs([...data]);
				setLoading(false);
			})
			.catch(error => console.log(error));
	};

	// Render
	return (
		<div className="container-fluid">
			<TodoForm createLI={updateTodosAPI} />
			<ul className="list-group">
				<ToDos
					listOfToDos={todoLIs.slice(1, todoLIs.length)}
					removeFunction={updateTodosAPI}
				/>
			</ul>
			{loading ? <Spinner /> : null}
			<small className="li-counter text-muted">
				{todoLIs.length - 1 < 0 ? 0 : todoLIs.length - 1} tasks left
			</small>
		</div>
	);
};
