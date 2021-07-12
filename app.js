import React from "react";
import {
ApolloClient,InMemoryCache,ApolloProvider,HttpLink,split,} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
const errorLink = onError(({ graphqlErrors, networkError }) => {
if (graphqlErrors) {
graphqlErrors.map(({ message, location, path }) => {
alert(`Graphql error ${message}`);
});}});
const httpLink = new HttpLink({
uri: "",
headers: {}});
const wsLink = new WebSocketLink({
uri: "",
options: {
reconnect: true,
connectionParams: {
headers: {},
},}});
const splitLink = split(
({ query }) => {
const definition = getMainDefinition(query);
return (
definition.kind === "OperationDefinition" &&
definition.operation === "subscription"
);
},
wsLink,
httpLink,
errorLink
);
const client = new ApolloClient({
cache: new InMemoryCache(),
link: splitLink,
});
const App = () => {
return (
<ApolloProvider client={client}>
</ApolloProvider>
);
};
export default App;
