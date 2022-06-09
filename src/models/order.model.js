const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
       productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
       userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
       quantity:{type:Number,required:true}
},{
   
    versionKey:false
})

const Order=mongoose.model("order",orderSchema)

module.exports=Order;