import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<div className="w-[85%]">
			<div className="flex sticky bg-orange ">
				<Link
					href="/"
					className="no-underline">
					<div className="mr-1 font-bold">HackerNews</div>
				</Link>
				<div className="flex">
					<Link
						href="/"
						className="ml-1 no-underline">
						new
					</Link>
					<div className="ml-1">|</div>
					<Link
						href="/create"
						className="ml-1 no-underline">
						submit
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
