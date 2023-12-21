const { Message } = require('../models');

// Example controller to create a new message
const createMessage = async (text, sender, recipient) => {
  try {
    const message = new Message({ text, sender, recipient });
    await message.save();
    return message;
  } catch (error) {
    throw error;
  }
};

// Example controller to get messages by user ID
const getMessagesByUser = async (userId) => {
  try {
    const messages = await Message.find({ $or: [{ sender: userId }, { recipient: userId }] });
    return messages;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMessage,
  getMessagesByUser,
  // Add other message-related controllers as needed
};