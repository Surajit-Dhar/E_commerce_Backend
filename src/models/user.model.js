const mongoose = require("mongoose");


const userController = new mongoose.Schema({
    id:{type:Number , required:true},
    first_Name : {type:String , required:true},
    last_Name : {type : String , required:true},
    address : {type:String , required:true},
    age : {type:Number , required:false},
    gender:{type:String,default:"Male"},
},
{
    versionKey:false,
}
);


const User = mongoose.model("user", userController);

module.exports= User;
