const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: {type: String, required: true},
  avatar: {type: String, default: 'url avatar'},
  role: {type: String, default: 'employee'},
  bio: String,
});

module.exports = mongoose.model("Account", Account);
