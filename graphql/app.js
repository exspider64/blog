const Koa = require('koa');
const {ApolloServer} = require('apollo-server-koa');
const {makeExecutableSchema} = require('graphql-tools');
const {resolvers, typeDefs} = require('./schemas')

const port = 4000;

const server = new AppolloServer({
    schema: makeExecutableSchema({typeDefs, resolvers})
})

const app = new Koa ();
server.applyMiddleware({app});

app.listen({portt: PORT}), () => {
    console.log("server ready at http://localhost:${PORT + server.graphqlPath}");
}