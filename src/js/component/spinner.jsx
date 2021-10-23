import React from "react";

export const Spinner = () => {
	// Render
	return (
		<div
			className="d-flex justify-content-center py-2"
			style={{ borderBottom: "1px solid #00000020" }}>
			<div
				className="spinner-border"
				role="status"
				style={{
					border: "0.25em solid iherit",
					borderRightColor: "transparent"
				}}></div>
		</div>
	);
};
