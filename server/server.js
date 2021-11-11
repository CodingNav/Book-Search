console.log("test");
const express = require('express');
const path = require('path');
const db = require('./config/connection');
console.log("test 2");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
console.log("test 3");

// AUTH MIDDLEWARE
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});
console.log("test 4");

server.applyMiddleware({ app });

console.log("test 5");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("test 6");
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

console.log("test 7");
// serve up react front-end in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
console.log("test 8");
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
console.log("test 9");