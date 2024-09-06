const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  quadrant: { type: String, enum: ['urgent-important', 'urgent-not-important', 'not-urgent-important', 'not-urgent-not-important'] },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
