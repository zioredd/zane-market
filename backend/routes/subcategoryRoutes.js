const express = require("express");
const {
  getSubcategoryById,
  updateSubcategory,
} = require("../controllers/subcategoryController");

const router = express.Router();

router.get("/:id", getSubcategoryById);
router.put("/:id", updateSubcategory);

module.exports = router;
