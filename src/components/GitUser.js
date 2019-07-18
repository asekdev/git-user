import React from "react";
import { Grid, Paper, Avatar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	card: {
		width: 400
	},
	media: {
		height: 250,
		objectFit: "contain"
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
						<Typography variant="h5" component="h2">
							{name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" component="p">
							@{login}
						</Typography>
						<Typography variant="subtitle2" color="textPrimary" component="p">
							{bio}
						</Typography>
						<Typography variant="body2" color="textPrimary" component="p">
							{location}
						</Typography>
						<Grid container style={{ marginTop: 10 }}>
							<Grid item sm={4}>
								<Typography variant="h6" color="textPrimary" component="p" align={"center"}>
									{following}
								</Typography>
								<Typography variant="subtitle1" color="textSecondary" component="p" align={"center"}>
									Following
								</Typography>
							</Grid>
							<Grid item sm={4}>
								<Typography variant="h6" color="textPrimary" component="p" align={"center"}>
									{followers}
								</Typography>
								<Typography variant="subtitle1" color="textSecondary" component="p" align={"center"}>
									Followers
								</Typography>
							</Grid>
							<Grid item sm={4}>
								<Typography variant="h6" color="textPrimary" component="p" align={"center"}>
									{public_repos}
								</Typography>
								<Typography variant="subtitle1" color="textSecondary" component="p" align={"center"}>
									Repos
								</Typography>
							</Grid>
						</Grid>
					</CardContent>

					<CardActions style={{ justifyContent: "center", flexGrow: 1 }}>
						<a href={html_url} target="_blank" style={{ textDecorationLine: "none", width: "100%" }}>
							<Button size="medium" color="primary" fullWidth={true}>
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
