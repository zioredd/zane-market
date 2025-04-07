const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create subcategory schema
const subcategorySchema = new Schema(
  {
    name: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subcategory", subcategorySchema);
