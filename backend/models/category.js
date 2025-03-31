// create category schema
const mongoose = require("mongoose");
const { Categories, Subcategories } = require("../common/enums/categories.js");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    subcategories: { type: [String], enum: Subcategories },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
