const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Candles_products');

const productSchema = new mongoose.Schema ({
  pic_one: String,
  pic_two: String,
  price: Number,
  description: String,
  title: String,
  colours: Array
})

const Product = mongoose.model('product', productSchema)

module.exports = { Product }