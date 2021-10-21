import React from "react";

export const TodoForm = props => {
	return (
		<div className="container-fluid">
			<form>
				<div className="row align-items-center justify-content-between form-group">
					<div className="col-10">
						<input
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
