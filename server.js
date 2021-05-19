const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// Defining Product object Schema
const Product = mongoose.model('products', new mongoose.Schema({
    code: Number,
    name: String,
    description: String,
    price: Number,
    stock: Number,
    image: String,
    images: [String],
    size: [String],
    categories: [String],
}));

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        console.log()
    }
});
  
app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, ()  => {
    console.log(`Server started at ${HOST}:${PORT}`);
})