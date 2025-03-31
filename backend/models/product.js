// create product schema
const mongoose = require("mongoose");
const { Categories, Subcategories } = require("../common/enums/categories.js");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true, enum: Categories },
  subcategory: { type: String, required: true, enum: Subcategories },
  stock: { type: Number },
  picture: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
