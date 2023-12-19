// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If you need CORS support
const dotenv = require('dotenv'); // For handling environment variables

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS if needed

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
// Example: app.use('/api/messages', require('./controllers/messageController'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
