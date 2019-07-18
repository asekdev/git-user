import React from "react";

const Error = ({ error }) => {
	return (
		<div>
			<pre>{error}</pre>
		</div>
	);
};

export default Error;
