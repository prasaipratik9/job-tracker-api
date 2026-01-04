require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // NEW

// Initialize Express app
const app = express();

// Define port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Middleware - Parse JSON bodies
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
// Health check route
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Job Tracker API is running',
    timestamp: new Date().toISOString(),
    database:
      mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'API test route working',
    data: {
      environment: process.env.NODE_ENV || 'development',
      port: PORT,
      database:
        mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    },
  });
});

// Test route - Create a user (NEW)
app.post('/api/users/test', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create new user instance
    const user = new User({
      name,
      email,
      password,
    });

    // Save user (this triggers the pre-save middleware)
    await user.save();

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
        },
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});
