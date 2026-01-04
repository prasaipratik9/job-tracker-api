require('dotenv').config();
const express = require('express');

// Initialize Express app
const app = express();

// Define port
const PORT = process.env.PORT || 5000;

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
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});
