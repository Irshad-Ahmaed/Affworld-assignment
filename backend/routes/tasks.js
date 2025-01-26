// backend/routes/tasks.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Task = require('../models/Task');

// Create Task
router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const task = new Task({
      user: req.userId,
      title,
      description,
    });

    await task.save();
    res.json(task);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get Tasks
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update Task Status
router.put('/:id', auth, async (req, res) => {
  try {
    const { status } = req.body;

    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Ensure user owns task
    if (task.user.toString() !== req.userId)
      return res.status(401).json({ msg: 'Not authorized' });

    task.status = status;
    await task.save();
    res.json(task);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete Task
router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Ensure user owns task
    if (task.user.toString() !== req.userId)
      return res.status(401).json({ msg: 'Not authorized' });

    await Task.findByIdAndDelete(req.params.id);
    res.status(201).json({ msg: 'Task removed' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
