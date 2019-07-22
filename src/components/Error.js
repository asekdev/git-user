import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwoTonedErrorIcon from "@material-ui/icons/ErrorTwoTone";

const useStyles = makeStyles({
	card: {
		width: 400,
		backgroundColor: "#130f40"
	},
	media: {
		height: 250,
		objectFit: "contain"
	},
	icon: {
		paddingRight: 10,
		fontSize: 50,
		color: "#eb4d4b"
	},
	text: {
		color: "#eb4d4b",
		marginTop: 10
	}
});

const Error = ({ error }) => {
	const classes = useStyles();

	return (
		<div style={{ display: "flex", alignContent: "center", justifyContent: "center", color: "red", marginTop: 50 }}>
			<TwoTonedErrorIcon className={classes.icon} />
			<Typography variant="h5" gutterBottom className={classes.text}>
				{error}
			</Typography>
		</div>
	);
};

export default Error;
