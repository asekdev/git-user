import React from "react";
import { Typography } from "@material-ui/core";

const Error = ({ error }) => {
	return (
		<div style={{ display: "flex", alignContent: "center", justifyContent: "center", color: "red", marginTop: 50 }}>
			<Typography variant="h6" gutterBottom>
				{error}
			</Typography>
		</div>
	);
};

export default Error;
