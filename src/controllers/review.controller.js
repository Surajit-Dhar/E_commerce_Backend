const express=require("express")
const Review=require("../models/review.model")
const router=express.Router()


router.get("/",async(req,res)=>{
    try {
           let review=await Review.find().populate({path:"userId", select:{first_Name:1,_id:0}},
           {path:"productId", select:{ product_Name:1 ,product_Img:1 ,_id:0}}
           ).lean().exec()

           res.status(200).send({Reviews:review});
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})


router.post("/create",async(req,res)=>{
    try {
        let review=await Review.create(req.body);
        res.status(201).send(review)
    } 
    catch (error) {
        res.status(500).send({error: error.message} );
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const review = await Review.findById(req.params.id).populate({path:"userId", select:{first_Name:1,_id:0}},
        {path:"productId", select:{ product_Name:1 ,product_Img:1 ,_id:0}}
        ).lean().exec();

        return res.status(200).send(review);
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})


router.patch("/:id/edit",async(req,res)=>{
    try {
        let review=await Review.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({ order , message: "success" });
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
});

router.delete("/:id", async (req,res) => {
    try{
        const review = await review.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);

    }catch(err){
        return res.status(500).send({message:err.message});
    }
});


module.exports=router