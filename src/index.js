const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use (express.json());
const connect = require('./configs/db');
const userController = require("./controllers/user.controller");
const brandController=require("./controllers/brand.controller");
const productController=require("./controllers/product.controller");
const categoriesController = require("./controllers/categories.controller");
const orderController = require("./controllers/order.controller");

app.use("/users",userController);
app.use("/brands",brandController)
app.use("/products",productController);
app.use("/category" , categoriesController);
app.use("/orders" , orderController);




app.listen(6700 , async() => {
    try{
        await connect();
        console.log("Listing on port 6700")

    }catch(err){
        console.log({error: err.message});
    }
})