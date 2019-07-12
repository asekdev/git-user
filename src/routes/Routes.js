import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				{/* <Route exact path="/project/:id" component={Project} />
				<Route component={PathNotFound} /> */}
			</Switch>
		);
	}
}

export default Routes;
