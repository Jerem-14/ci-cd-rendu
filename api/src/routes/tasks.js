// src/routes/tasks.js
const express = require('express');
const router = express.Router();

let tasks = [];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Create a new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const task = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
    createdAt: new Date()
  };

  tasks.push(task);
  res.status(201).json(task);
});

// Update a task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description || tasks[taskIndex].description,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed
  };
  
  res.json(tasks[taskIndex]);
});

module.exports = router;