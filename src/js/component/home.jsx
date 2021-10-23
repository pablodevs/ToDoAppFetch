import React, { useEffect, useState } from "react";

const Home = () => {
	// Hooks
	const [users, setUsers] = useState("");

	useEffect(() => {
		let out = {
			label: "pablo's tasks",
			done: true
		};

		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "PUT",
			body: JSON.stringify(out),
			headers: { "Content-Type": "application/json" }
		})
			.then(resp => {
				console.log("ok?:", resp.ok); // will be true if the response is successfull
				console.log("status?:", resp.status); // the status code = 200 or code = 400 etc.
				// console.log("text?:", resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log("data?:", data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);

	// Render
	return (
		<div className="text-center mt-5">
			<h1 className="APIresponse">Hello {users}!</h1>
		</div>
	);
};

export default Home;
