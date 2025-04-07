const Subcategory = require("../models/subcategory");

// Create a new subcategory
exports.createSubcategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId)
      return res.status(400).json({ message: "Category ID is required" });

    const { name } = req.body;
    const newSubcategory = new Subcategory({
      name,
      categoryId,
    });
    const savedSubcategory = await newSubcategory.save();
    res.status(201).json(savedSubcategory);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a subcategory by ID
exports.updateSubcategory = async (req, res) => {
  try {
    const { name, category } = req.body;
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      req.params.id,
      { name, category },
      { new: true }
    );
    if (!updatedSubcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.status(200).json(updatedSubcategory);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a single subcategory by ID
exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategoryId = req.params.id;
    const subcategory = await Subcategory.findById(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
