const express = require('express');
const productCtrl = require('../controller/productCtrl');

const router = express.Router();

// Defining API routes
router.post('/products', productCtrl.createProduct);
router.get('/products', productCtrl.fetchProducts);
router.get('/products/:id', productCtrl.getDetailProduct);
router.put('/products/:id', productCtrl.updateProduct);
router.delete('/products/:id', productCtrl.removeProduct);

module.exports = router;