const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Pending', 'Completed', 'Done'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
