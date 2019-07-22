import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwoTonedErrorIcon from "@material-ui/icons/ErrorTwoTone";

const useStyles = makeStyles({
	container: {
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		marginTop: 50,
		marginLeft: 35,
		marginRight: 35,
		overflowWrap: "break-word"
	},
	icon: {
		paddingRight: 10,
		fontSize: 50,
		color: "#ea8685"
	},
	text: {
		color: "#fff",
		marginTop: 10,
		wordWrap: "break-word"
	}
});

const Error = ({ error }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<TwoTonedErrorIcon className={classes.icon} />
			<Typography variant="h5" gutterBottom className={classes.text}>
				{error}
			</Typography>
		</div>
	);
};

export default Error;
