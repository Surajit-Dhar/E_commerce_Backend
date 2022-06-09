const mongoose = require("mongoose");

const categorySchema=new mongoose.Schema({
    title:{type:String,required:true},
    parentId :{type:mongoose.Schema.Types.ObjectId , ref:"parent", required:false}

},{
    
    versionKey:false
    
})

const Category=mongoose.model("category",categorySchema)
module.exports=Category;