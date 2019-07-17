import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Grid, Input, Container, Button, TextField, GridList, GridListTile, Box } from "@material-ui/core";

const Home = () => {
	return (
		<Container fixed>
			<Grid
				container
				spacing={10}
				direction="column"
				alignContent="center"
				alignItems="stretch"
				// justify="center"
				style={{ minHeight: "100vh", marginTop: "50px", minWidth: "100vh" }}
				spacing={5}
			>
				<Box width="100%" justifyContent={"center"}>
					<Grid item xs={12}>
						<Typography variant="h1" color="textSecondary" style={{ textAlign: "center" }}>
							Git User
						</Typography>
					</Grid>
					<Box display={"flex"} justifyContent={"center"} width={"100%"}>
						<Box width={"75%"}>
							<TextField
								id="standard-full-width"
								placeholder="Enter a users github username!"
								fullWidth
								margin="normal"
							/>
						</Box>
						<Box width={"15%"}>
							<Button variant={"contained"} color="primary" fullWidth={true} large={true}>
								Go
							</Button>
						</Box>
					</Box>
				</Box>
			</Grid>
		</Container>
	);
};

//map state & dispatch to props
//connect HOC with redux

export default Home;
