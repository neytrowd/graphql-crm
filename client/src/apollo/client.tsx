import {ApolloClient, HttpLink} from "@apollo/client";
import cache from "./cache";

const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
})

const client = new ApolloClient({
    link, cache
})

export default client;