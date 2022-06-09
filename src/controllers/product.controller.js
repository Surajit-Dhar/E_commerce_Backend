const express=require("express")
const Product=require("../models/product.model")
const router=express.Router()

router.get("/",async(req,res)=>{
    try {
          const product = await Product.find().populate({path: "categoryID",
          select:{title:1, _id:0}}).lean().exec();

           res.status(200).send({data:product})
    } 
    catch (error) {
        res.status(500).send({message: error.message });
    }
})


router.post("/create",async(req,res)=>{
    try {
           const product=await Product.create(req.body);

           return res.status(201).send(product);
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate({path:"categoryID" , select:{title:1 , _id:0}}).lean().exec();

        if (!product) {
          return res.status(404).send({ result : "Product Not found.." });
        }
        return res.status(200).send({ data: product, message: "success" });
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})


router.patch("/:id/edit",async(req,res)=>{
    try {
           const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate({path:"categoryID", select:{title:1 , _id:0}}).lean().exec()
           return res.status(201).send({ data: product, message: "success" });
          
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})

module.exports=router