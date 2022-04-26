const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  barcode: Number,
});

const Products = mongoose.model("product", productSchema);

module.exports = Products;
