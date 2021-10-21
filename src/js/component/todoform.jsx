import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const TodoForm = props => {
	// Hooks
	const [input, setInput] = useState("");

	// Functions
	const handleSubmit = () => {
		if (!input || /^\s*$/.test(input)) {
			null;
		} else props.createLI(input.replace(/\s\s+/g, " "));

		setInput("");
	};

	// Render
	return (
		<div className="container-fluid">
			<form onSubmit={handleSubmit}>
				<div className="row align-items-center justify-content-between form-group">
					<div className="col-10">
						<input
							onChange={e => setInput(e.target.value)}
							value={input}
							type="text"
							className="form-control"
							placeholder="What needs to be done?"
							width="80%"
						/>
					</div>
					<div className="col-auto">
						<button className="add-button" type="submit">
							<i className="fas fa-plus"></i>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

TodoForm.propTypes = {
	createLI: PropTypes.func
};
