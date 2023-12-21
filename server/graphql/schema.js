// server/graphql/schema.js

const { makeExecutableSchema } = require('graphql-tools');
const { GraphQLDateTime } = require('graphql-iso-date');
const resolvers = require('./resolvers');
const { MessageType, UserType } = require('./types');

const typeDefs = `
  scalar DateTime

  type Query {
    getMessagesByUser(userId: ID!): [Message]
  }

  type Mutation {
    register(username: String!, password: String!): AuthPayload
    login(username: String!, password: String!): AuthPayload
    createMessage(text: String!, sender: ID!, recipient: ID!): Message
  }

  type AuthPayload {
    user: User
    token: String
  }

  ${MessageType}

  ${UserType}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: (e) => console.log(e) },
});

module.exports = schema;
