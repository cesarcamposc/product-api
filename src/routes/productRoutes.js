const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
// POST /api/products
router.post('/', productController.createProduct);
// Get all products
//router.get('')
//router.put('')
//router.delete('')
module.exports = router;
