import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Train } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	navIcon: {
		paddingRight: 15
	}
}));

const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.root}>
			<AppBar position="static" color={theme.palette.primary.dark}>
				<Toolbar>
					<div className={classes.navIcon}>
						<Train />
					</div>
					<Typography variant="h6" color="inherit" className={theme.palette.text.primary}>
						Trivia Train
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
