import React from "react";

export const ErrorAlert = () => {
	return (
		<div
			className="alert alert-danger alert-dismissible fade show d-flex align-items-center"
			role="alert">
			<div className="alert-text">
				<strong>Holy guacamole!</strong> Problems connecting with the
				API... So sorry bro!
			</div>
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"></button>
		</div>
	);
};
