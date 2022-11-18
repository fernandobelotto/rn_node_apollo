import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const resolvers = {
  Query: {
    books: () => books,
  },
};

const books = [
  {
    title: "The Awakening axcv",
    author: "Kate Chopin 123",
    id: "1",
  },
  {
    title: "City of Glass asdf",
    author: "Paul Auster 1234",
    id: "2",
  },
];

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    id: ID
  }

  type Query {
    books: [Book]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },

});

console.log(`🚀  Server ready at: ${url}`);
