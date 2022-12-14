import Head from "next/head";
import React from "react";
import CreateLink from "../components/CreateLink";
import Header from "../components/Header";

const create = () => {
	return (
		<div className={"flex flex-col items-center justify-center"}>
			<Head>
				<title>Create Post - HackerNews</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />

			<main className={"bg-bgGray px-8 w-[85%]"}>
				<CreateLink />
			</main>
		</div>
	);
};

export default create;
