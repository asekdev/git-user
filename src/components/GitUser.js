import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	card: {
		width: 400,
		backgroundColor: "#ecf0f1"
	},
	text: {
		color: "#353b48"
	},
	subHeader: {
		color: "#34495e",
		fontWeight: 600
	},
	media: {
		height: 250,
		objectFit: "contain"
	},
	btn: {
		textDecorationLine: "none",
		width: "100%",
		backgroundColor: "#45aaf2",
		color: "#F2F2F2",
		borderRadius: 5
	}
});

const GitUser = ({ data }) => {
	const { avatar_url, name, login, bio, html_url, location, followers, following, public_repos } = data;
	const classes = useStyles();
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container style={{ marginTop: 50, justifyContent: "center" }}>
				<Card className={classes.card}>
					<div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
						<CardMedia image={avatar_url} style={{ height: 250, width: 250, objectFit: "contain", margin: 10 }} />
					</div>

					<CardContent>
						<Typography variant="h5" component="h2" className={classes.subHeader}>
							{name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" component="p" className={classes.text}>
							@{login}
						</Typography>
						<Typography variant="subtitle2" color="textPrimary" component="p" className={classes.text}>
							{bio}
						</Typography>
						<Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
							{location}
						</Typography>
						<Grid container style={{ marginTop: 10 }}>
							<Grid item sm={4}>
								<Typography
									variant="h6"
									color="textPrimary"
									component="p"
									align={"center"}
									className={classes.subHeader}
								>
									{following}
								</Typography>
								<Typography
									variant="subtitle1"
									color="textSecondary"
									component="p"
									align={"center"}
									className={classes.text}
								>
									Following
								</Typography>
							</Grid>
							<Grid item sm={4}>
								<Typography
									variant="h6"
									color="textPrimary"
									component="p"
									align={"center"}
									className={classes.subHeader}
								>
									{followers}
								</Typography>
								<Typography
									variant="subtitle1"
									color="textSecondary"
									component="p"
									align={"center"}
									className={classes.text}
								>
									Followers
								</Typography>
							</Grid>
							<Grid item sm={4}>
								<Typography
									variant="h6"
									color="textPrimary"
									component="p"
									align={"center"}
									className={classes.subHeader}
								>
									{public_repos}
								</Typography>
								<Typography
									variant="subtitle1"
									color="textSecondary"
									component="p"
									align={"center"}
									className={classes.text}
								>
									Repos
								</Typography>
							</Grid>
						</Grid>
					</CardContent>

					<CardActions style={{ justifyContent: "center", flexGrow: 1 }}>
						<a href={html_url} target="_blank" className={classes.btn} rel="noopener noreferrer">
							<Button
								size="medium"
								variant="contained"
								fullWidth={true}
								style={{ backgroundColor: "inherit", color: "inherit" }}
							>
								Go to page
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>
		</div>
	);
};

export default GitUser;
