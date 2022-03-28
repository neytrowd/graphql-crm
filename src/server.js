const path = require("path");
const http = require('http');
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose');
const logger = require('./services/logger')
const {ApolloServer} = require('apollo-server-express')
const {ApolloServerPluginDrainHttpServer} = require('apollo-server-core')
const {loadFilesSync} = require('@graphql-tools/load-files')
const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge')

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json())

async function startDataBaseConnection() {
    mongoose.connect(process.env.MONGO_CONNECT_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        logger.info('Database connected')
    })
}

async function startApolloServer() {
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: mergeTypeDefs(loadFilesSync(path.join(__dirname, '/types'))),
        resolvers: mergeResolvers(loadFilesSync(path.join(__dirname, '/resolvers'))),
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    });
    await server.start();
    server.applyMiddleware({app});
    await new Promise(resolve => httpServer.listen({
        port: process.env.APOLLO_SERVER_PORT
    }, resolve));
    logger.info(`Server ready at http://localhost:${process.env.APOLLO_SERVER_PORT}${server.graphqlPath}`);
}

startDataBaseConnection()
startApolloServer()