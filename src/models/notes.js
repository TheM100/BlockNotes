const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Notes = mongoose.model(userSchema);

module.exports = Notes;
