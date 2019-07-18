import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loader = () => {
	return (
		<div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: 50 }}>
			<CircularProgress />
		</div>
	);
};

export default Loader;
