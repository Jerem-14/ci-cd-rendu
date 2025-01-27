// src/app.js
const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(express.json());

app.use('/api/tasks', tasksRouter);

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;