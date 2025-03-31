const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

// Middleware for protected routes

// Public routes (no authentication needed)
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// Protected routes (require authentication & privilege)
router.post("/", [authMiddleware], productController.createProduct);
router.put("/:id", [authMiddleware], productController.updateProduct);
router.delete("/:id", [authMiddleware], productController.deleteProduct);

module.exports = router;
