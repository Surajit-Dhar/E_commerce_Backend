const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
       product_Img:{type:String,required:true},
       product_Name:{type:String,required:true},
       categoryID:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true},
       price:{type:Number,required:true},
       quantity:{type:Number,required:true}
},{
   
    versionKey:false
})

const Product=mongoose.model("product",productSchema)

module.exports=Product;