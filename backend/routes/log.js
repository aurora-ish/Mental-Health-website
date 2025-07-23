// routes/log.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const Log = require('../models/Log'); // You’ll define this next

// Save log
router.post('/', authenticateToken, async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Log content is required' });
  }

  try {
    const newLog = new Log({
      user: req.user.id,
      content,
      date: new Date().toISOString().split('T')[0],
    });
    await newLog.save();
    res.status(201).json({ message: 'Log saved successfully' });
  } catch (err) {
    console.error('Error saving log:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
// Get logs for user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const logs = await Log.find({ user: req.user.id }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    console.error('Error fetching logs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
