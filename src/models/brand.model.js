const mongoose = require("mongoose");

const brandSchema=new mongoose.Schema({
    brand_Name:{type:String,required:true},
    productId :{type:mongoose.Schema.Types.ObjectId , ref:"product", required:true}

},{
    
    versionKey:false
    
})

const Brand=mongoose.model("brand",brandSchema)
module.exports=Brand