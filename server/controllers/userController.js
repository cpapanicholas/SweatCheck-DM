const { User } = require('../models');

// Example controller to get a user by ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserById,
  // Add other user-related controllers as needed
};