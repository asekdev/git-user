import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Box, FilledInput } from "@material-ui/core";
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
	},
	goBtnStyle: {
		padding: "10px"
	}
});

const Home = ({ data, username, loading, error, onSubmit, onClear, onUserInput }) => {
	const classes = useStyles();
	const [user, setUser] = useState("");
	let errorComponent = error ? <Error error={`@${user} doesn't exist. Try another user.`} /> : null;
	let userComponent = Object.keys(data).length !== 0 ? <GitUser data={data} /> : null;
	let loadingComponent = loading ? <Loader /> : null;

	const submitUser = () => {
		if (username.trim() !== "") {
			setUser(username);
			onSubmit();
		}
	};

	const checkSubmit = e => {
		if (e.key === "Enter") {
			submitUser();
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
				style={{ minHeight: "100vh", minWidth: "100vh" }}
			>
				<Box width="80%" justifyContent="center">
					<Header />
					<Box display={"flex"} justifyContent={"center"} width={"100%"}>
						<Box width={"70%"} color="primary" marginTop={5}>
							<FilledInput
								fullWidth={true}
								data-testid="input-gitUser"
								onChange={onUserInput}
								autoFocus={true}
								disableUnderline={true}
								placeholder={"Enter a github username"}
								style={{ color: "#F2F2F2", fontSize: 20 }}
								onKeyPress={checkSubmit}
							/>
						</Box>
						{/* <Box width={"15%"} paddingLeft={5} paddingTop={6}>
							<Button
								variant="contained"
								data-testid="submit-gitUser"
								fullWidth={true}
								onClick={submitUser}
								className={classes.goBtnStyle}
							>
								Go
							</Button>
						</Box> */}
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
