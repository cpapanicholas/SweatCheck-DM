// server/graphql/types/messageType.js

const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    sender: { type: GraphQLID }, // Assuming sender and recipient are IDs (references to User)
    recipient: { type: GraphQLID },
    createdAt: { type: GraphQLString }, // You can use GraphQLDateTime for a more precise type
  }),
});

module.exports = MessageType;
