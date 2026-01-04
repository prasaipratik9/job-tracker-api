require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});
