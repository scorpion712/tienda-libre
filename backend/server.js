const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const Product = require('./model/productModel');
// API routers
const productRouter = require('./router/productRouter'); 

// Creating express app
const app = express(); 
// adding middleware to recognize the incoming Request Object as a JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect to DB
dotenv.config(); 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch((error) => console.log("error", error.message)); 

// Defining API with routers
app.use('/api', productRouter);
//app.use('/api', orderRouter);
  
const data = require("./data");
app.get("/api/seed", async (req, res) => {
    await Product.remove({}); // deprecated
    const products = await Product.insertMany(data.products);
    res.send({products});
    }
)

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, ()  => {
    console.log(`Server started at ${HOST}:${PORT}`);
})