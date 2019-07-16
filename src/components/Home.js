import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Grid, Input, Container, Button } from "@material-ui/core";

const Home = () => {
	return (
		<Container>
			<Grid
				container
				spacing={10}
				direction="column"
				alignItems="center"
				justify="flex-start"
				style={{ minHeight: "100vh", marginTop: "50px" }}
				spacing={5}
			>
				<Grid item xs={12}>
					<Typography variant="h1" color="textSecondary">
						Git User
					</Typography>
				</Grid>
				<Grid item xs={12} lg={12} xl={"auto"}>
					<Input placeholder="Enter a github username" />
					<Button variant={"contained"} color="primary">
						Go!
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

//map state & dispatch to props
//connect HOC with redux

export default Home;
