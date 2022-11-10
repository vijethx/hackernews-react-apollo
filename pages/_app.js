import "../styles/globals.css";

import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({ uri: "http://localhost:4000" });

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;

/*
Let’s take a look at what’s going on in the code snippet above:

1. We import all the dependencies we need to wire up the Apollo client, all from @apollo/client.
2. We create the httpLink that will connect our ApolloClient instance with the GraphQL API. The GraphQL server will be running on http://localhost:4000.
3. We instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache.
4. Finally, we render the root component of our React app. The App is wrapped with the higher-order component ApolloProvider that gets passed the client as a prop.
*/
