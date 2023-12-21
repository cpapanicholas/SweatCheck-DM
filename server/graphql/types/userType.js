// server/graphql/types/userType.js

const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString }, // Note: It's not recommended to expose password in GraphQL, consider removing it
    createdAt: { type: GraphQLString }, // You can use GraphQLDateTime for a more precise type
  }),
});

module.exports = UserType;
