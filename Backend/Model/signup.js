const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles:{
    type:String,
    required:true
  },
  agreedToTerms: {
    type: Boolean,
    required: true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
    required:true
  }
});

module.exports = mongoose.model("Signup",Schema);
