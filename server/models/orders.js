const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost:27017/Candles_orders');

const orderSchema = new mongoose.Schema ({
  submittedBy: String,
  resolved: Boolean,
  products: Array,
  totalCost: Number,
  user: String,
  date: Date
  // address: String,
})

const Order = mongoose.model('order', orderSchema)

module.exports = { Order }