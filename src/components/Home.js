import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Button, Box, Input } from "@material-ui/core";
import { dataSelector, usernameSelector, loadingSelector, errorSelector } from "../redux/selectors";
import { getUser, clearState, changUserInput } from "../redux/actions";
import { createStructuredSelector } from "reselect";
import Error from "./Error";
import GitUser from "./GitUser";
import Loader from "./Loader";

const Home = ({ data, username, loading, error, onSubmit, onClear, onUserInput }) => {
	useEffect(() => {}, []);

	let errorComponent = error ? <Error error={"Something happened..."} /> : null;
	let userComponent = Object.keys(data).length !== 0 ? <GitUser data={data} /> : null;
	let loadingComponent = loading ? <Loader /> : null;
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
				style={{ minHeight: "100vh", marginTop: "50px", minWidth: "100vh" }}
			>
				<Box width="80%" justifyContent={"center"}>
					<Grid item xs={12}>
						<Typography variant="h1" color="textSecondary" style={{ textAlign: "center", marginTop: "100px" }}>
							Git User
						</Typography>
					</Grid>
					<Box display={"flex"} justifyContent={"center"} width={"100%"}>
						<Box width={"70%"}>
							<Input fullWidth={true} onChange={onUserInput} placeholder={"Enter a github username"} />
						</Box>
						<Box width={"15%"} paddingLeft={5}>
							<Button variant={"contained"} fullWidth={true} color="primary" onClick={submitUser}>
								Go
							</Button>
						</Box>
					</Box>
				</Box>
				{errorComponent}
				{loadingComponent}
				{userComponent}
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
