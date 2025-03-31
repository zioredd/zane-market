const Product = require("../models/Product");

// Utility to handle async errors
const handleAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Get all products
exports.getAllProducts = handleAsync(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get a product by ID
exports.getProductById = handleAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// Add a new product
exports.createProduct = handleAsync(async (req, res) => {
  const { name, description, price, category, picture } = req.body;

  // Validate input
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const product = new Product({ name, description, price, category, picture });
  const savedProduct = await product.save();
  res.status(201).json(savedProduct);
});

// Update a product
exports.updateProduct = handleAsync(async (req, res) => {
  const { name, description, price, category, picture } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, price, category, picture },
    { new: true, runValidators: true }
  );

  if (!updatedProduct)
    return res.status(404).json({ message: "Product not found" });

  res.json(updatedProduct);
});

// Delete a product
exports.deleteProduct = handleAsync(async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct)
    return res.status(404).json({ message: "Product not found" });

  res.json({ deleted: true });
});
