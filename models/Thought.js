const mongoose = require('mongoose');

// Reaction Schema
const reactionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  reactionText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Thought Schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});


thoughtSchema.virtual('formattedCreatedAt').get(function () {
  return this.createdAt.toISOString(); 
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
