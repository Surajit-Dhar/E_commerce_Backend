const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.get("", async (req,res) => {
    try{
        const user = await User.find().lean().exec();
        return res.status(200).send({Users:user});

    }catch(err){
        return res.status(404).send({message:err.message});
    }
});

router.post("/create", async (req,res) => {
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user);

    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.get("/:id", async (req,res) => {
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send({Users:user});

    }catch(err){
        return res.status(404).send({message:err.message});
    }
});

router.get("/:id/address", async (req,res) => {
    try{
        const user = await User.findById(req.body.address).lean().exec();
        return res.status(200).send({Users:user});

    }catch(err){
        return res.status(404).send({message:err.message});
    }
});

router.delete("/:id", async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);

    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.patch("/:id/edit", async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body, {
            new:true,
        })
        return res.status(200).send(user);

    }catch(err){
      return res.status(500).send(err.message);
    }
})



module.exports=router;
