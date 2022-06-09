const express=require("express")
const Category=require("../models/categories.model")
const router=express.Router()


router.get("/",async(req,res)=>{
    try {
           let category=await Category.find().lean().exec()

           res.status(200).send(category);
    } 
    catch (error) {
        res.status(500).send({ message:error.message });
    }
})


router.post("/create",async(req,res)=>{
    try {
        let category=await Category.create(req.body);
        res.status(201).send({ categories: category })
    } 
    catch (error) {
        res.status(500).send({ message:error.message });
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id).lean().exec();

        return res.status(200).send({category});
    } 
    catch (error) {
        res.status(500).send({  message:error.message });
    }
})


router.patch("/:id/edit",async(req,res)=>{
    try {
        let category=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({ category, message: "success" });
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})


module.exports=router