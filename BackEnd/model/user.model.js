const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
