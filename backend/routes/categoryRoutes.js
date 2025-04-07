const express = require("express");

const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllSubcategories,
} = require("../controllers/categoryController");

const { createSubcategory } = require("../controllers/subcategoryController");

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

// Routes for subcategories
router.post("/:id/subcategories", createSubcategory);
router.get("/:id/subcategories", getAllSubcategories);

module.exports = router;
