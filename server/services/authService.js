// server/services/authService.js

const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateAuthToken = (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h', // You can customize the expiration time
  });

  return token;
};

const login = async (username, password) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new Error('Invalid username or password');
    }

    const token = generateAuthToken(user);

    return { user, token };
  } catch (error) {
    throw error;
  }
};

const register = async (username, password) => {
  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      throw new Error('Username is already taken');
    }

    const newUser = new User({ username, password });
    await newUser.save();

    const token = generateAuthToken(newUser);

    return { user: newUser, token };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  register,
};
