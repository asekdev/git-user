import React, { Component } from "react";
import { useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Home = () => {
	const theme = useTheme();

	return (
		<div>
			<Typography variant="h1">Test</Typography>
		</div>
	);
};

export default Home;
