import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Button, Box, Input } from "@material-ui/core";
import { dataSelector, usernameSelector, loadingSelector, errorSelector } from "../redux/selectors";
import { getUser, clearState, changUserInput } from "../redux/actions";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import Error from "./Error";
import GitUser from "./GitUser";
import Loader from "./Loader";
import Header from "./Header";

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

const Home = ({ data, username, loading, error, onSubmit, onClear, onUserInput }) => {
	const classes = useStyles();
	let errorComponent = error ? <Error error={`@${username} doesn't exist.`} /> : null;
	let userComponent = Object.keys(data).length !== 0 ? <GitUser data={data} /> : null;
	let loadingComponent = loading ? <Loader /> : null;

	const submitUser = () => {
		if (username.trim() !== "") {
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
				<Box width="80%" justifyContent="center">
					<Header />
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
