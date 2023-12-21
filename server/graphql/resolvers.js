// server/graphql/resolvers.js

const { login, register } = require('../services/authService');
const { createMessage, getMessagesByUser } = require('../services/messageService');
const { GraphQLDateTime } = require('graphql-iso-date');
const { User, Message } = require('../models');

const resolvers = {
  DateTime: GraphQLDateTime, // Import this from graphql-iso-date package

  Query: {
    // Example query to get messages by user ID
    getMessagesByUser: async (_, { userId }) => {
      try {
        return getMessagesByUser(userId);
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    // Example mutation to register a new user
    register: async (_, { username, password }) => {
      try {
        return register(username, password);
      } catch (error) {
        throw error;
      }
    },

    // Example mutation to log in a user
    login: async (_, { username, password }) => {
      try {
        return login(username, password);
      } catch (error) {
        throw error;
      }
    },

    // Example mutation to create a new message
    createMessage: async (_, { text, sender, recipient }) => {
      try {
        return createMessage(text, sender, recipient);
      } catch (error) {
        throw error;
      }
    },
  },

  Message: {
    // Example resolver to resolve the 'sender' field of the Message type
    sender: async (parent) => {
      try {
        return User.findById(parent.sender);
      } catch (error) {
        throw error;
      }
    },

    // Example resolver to resolve the 'recipient' field of the Message type
    recipient: async (parent) => {
      try {
        return User.findById(parent.recipient);
      } catch (error) {
        throw error;
      }
    },
  },

  User: {
    // Example resolver to resolve the 'createdAt' field of the User type
    createdAt: (parent) => parent.createdAt.toISOString(),
  },
};

module.exports = resolvers;
