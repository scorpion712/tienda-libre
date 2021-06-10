const mongoose = require('mongoose');

// Defining Product Schema
const productSchema =new mongoose.Schema({
    code: Number,
    name: String,
    description: String,
    price: Number,
    stock: Number,
    image: String,
    images: [String],
    size: [String],
    categories: [String],
});

module.exports = mongoose.model('Product', productSchema);