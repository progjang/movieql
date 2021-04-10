import {GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

console.log("bobab");

server.start(()=>console.log("Starting server..."))