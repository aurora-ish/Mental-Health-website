const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('Log', logSchema);
