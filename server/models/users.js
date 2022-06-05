const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost:27017/Candles_users');

const userSchema = new mongoose.Schema ({
  email: String,
  password: String,
  firstName: String,  
  lastName:String,
  isAdmin: Boolean
})

const User = mongoose.model('user', userSchema)

module.exports = { User }