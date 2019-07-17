import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Button, TextField, Box } from "@material-ui/core";
import {
  dataSelector,
  usernameSelector,
  loadingSelector,
  errorSelector
} from "../redux/selectors";

import { getUser, clearState, changUserInput } from "../redux/actions";
import store from "../redux/store";
import { createStructuredSelector } from "reselect";

const Home = ({
  data,
  username,
  loading,
  error,
  onSubmit,
  onClear,
  onUserInput
}) => {
  //   useEffect(() => {}, []);
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
            <Typography
              variant="h1"
              color="textSecondary"
              style={{ textAlign: "center" }}
            >
              Git User
            </Typography>
          </Grid>
          <Box display={"flex"} justifyContent={"center"} width={"100%"}>
            <Box width={"100%"}>
              {/* <TextField
                id="standard-full-width"
                placeholder="Enter a users github username!"
                fullWidth
                margin="normal"
                onChange={changUserInput}
			  /> */}
              <input onChange={onUserInput} />
            </Box>
            <Box width={"15%"}>
              <Button
                variant={"contained"}
                color="primary"
                fullWidth={true}
                onClick={onSubmit}
              >
                Go
              </Button>
            </Box>
          </Box>
          <p>{JSON.stringify(store.getState(), null, 2)}</p>
        </Box>
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
    onSubmit: evt => dispatch(getUser(evt.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
