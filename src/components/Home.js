import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Button, TextField, Box, Input } from "@material-ui/core";
import { dataSelector, usernameSelector, loadingSelector, errorSelector } from "../redux/selectors";

import { getUser, clearState, changUserInput } from "../redux/actions";
import store from "../redux/store";
import { createStructuredSelector } from "reselect";
import Error from "./Error";

const Home = ({ data, username, loading, error, onSubmit, onClear, onUserInput }) => {
	useEffect(() => {}, []);

	let errorComponent = error ? <Error error={"Something happened..."} /> : null;

	const submitUser = () => {
		console.log("hitting function");
		if (username.trim() !== "") {
			console.log("RUNNING");

			onSubmit();
		}
	};

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
			>
				<Box width="100%" justifyContent={"center"}>
					<Grid item xs={12}>
						<Typography variant="h1" color="textSecondary" style={{ textAlign: "center" }}>
							Git User
						</Typography>
					</Grid>
					<Box display={"flex"} justifyContent={"center"} width={"100%"}>
						<Box width={"70%"}>
							<Input fullWidth={true} onChange={onUserInput} placeholder={"Enter a github username"} />
						</Box>
						<Box width={"15%"} paddingLeft={20}>
							<Button variant={"contained"} fullWidth={true} color="primary" onClick={submitUser}>
								Go
							</Button>
						</Box>
					</Box>
					<p>{JSON.stringify(store.getState(), null, 2)}</p>
				</Box>
				{errorComponent}
			</Grid>
		</Container>
	);
};

Home.propTypes = {
	data: PropTypes.object,
	username: PropTypes.string,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	onSubmit: PropTypes.func,
	onClear: PropTypes.func,
	onUserInput: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
	data: dataSelector(),
	username: usernameSelector(),
	loading: loadingSelector(),
	error: errorSelector()
});

export const mapDispatchToProps = dispatch => {
	return {
		onUserInput: evt => dispatch(changUserInput(evt.target.value)),
		onClear: () => dispatch(clearState()),
		onSubmit: () => dispatch(getUser())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
