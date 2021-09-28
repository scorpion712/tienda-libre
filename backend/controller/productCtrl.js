const Product = require('../model/productModel');
/*
    Producs API controller
*/

// Get products by query
module.exports.fetchProducts = async (req, res) => { 
    try {
        const {query} = req.body;
        const products = await Product.find(query ? query : {});
        res.send(products);
    } catch (error) {
        console.log(Error, error.message);
        res.status(404).send({message: "Error: " + error.message});
    }
};

// Get product detail by given id
module.exports.getDetailProduct = async (req, res) =>  { 
    try {
        const id = req.params.id;
        const products = await Product.find({_id: id});
        res.send(products);
    } catch (error) {
        console.log(Error, error.message);
        res.status(404).send({message: "Error: " + error.message});
    }
};

// Delete a product by id
module.exports.removeProduct = async (req, res) => {
    try {
        const deleted = await Product.findOneAndDelete({_id: req.params.id});
        res.send(deleted);
    } catch (error) {
        console.log(Error, error.message);
        res.status(404).send({message: "Error: " + error.message});
    }
}

// Update product by given id
module.exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.updateOne({_id: req.params.id}, req.body); // the body contains the updated fields
        res.send(updated);
    } catch (error) {
        console.log(Error, error.message);
        res.status(404).send({message: "Error: " + error.message});
    }
}

// Create a new product
module.exports.createProduct =  async (req, res) => {
    try {
        const newProduct = new Product(req.body); // body contains data to save
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
    } catch (error) {
        console.log(Error, error.message);
        res.status(404).send({message: "Error: " + error.message});
    }
};