import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TwoTonedDeviceHubIcon from "@material-ui/icons/DeviceHubTwoTone";

const useStyles = makeStyles({
	header: {
		color: "#F2F2F2",
		textAlign: "center",
		marginTop: "100px",
		fontWeight: 500
	},
	icon: {
		fontSize: 75,
		paddingRight: 10
	}
});
const Header = () => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<Typography variant="h1" color="textSecondary" className={classes.header}>
				<TwoTonedDeviceHubIcon className={classes.icon} />
				Git User
			</Typography>
		</Grid>
	);
};

export default Header;
