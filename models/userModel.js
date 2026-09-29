const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    age: {
      type: Number,
      required: [true, 'Age is required']
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true
    }
  },
  { timestamps: true }
);

// Prevent OverwriteModelError by reusing the compiled model if it exists
module.exports = mongoose.models.User || mongoose.model('User', userSchema);