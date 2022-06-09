const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
       productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
       userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
       text:{type:String , required:true}
},{
   
    versionKey:false
})

const Review=mongoose.model("review",reviewSchema)

module.exports=Review;