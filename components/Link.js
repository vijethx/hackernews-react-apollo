import React from "react";

const Link = (props) => {
	const { link } = props;
	return (
		<div>
			<div className="">
				{link.description} ({link.url})
			</div>
		</div>
	);
};

export default Link;
