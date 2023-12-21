// server/services/messageService.js

const { Message } = require('../models');

const createMessage = async (text, sender, recipient) => {
  try {
    const newMessage = new Message({ text, sender, recipient });
    await newMessage.save();
    return newMessage;
  } catch (error) {
    throw error;
  }
};

const getMessagesByUser = async (userId) => {
  try {
    // Example: Get all messages where the user is the sender or recipient
    const messages = await Message.find({
      $or: [{ sender: userId }, { recipient: userId }],
    });

    return messages;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMessage,
  getMessagesByUser,
};
