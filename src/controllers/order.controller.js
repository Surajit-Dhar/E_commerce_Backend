const express=require("express")
const Order=require("../models/order.model")
const router=express.Router()


router.get("/",async(req,res)=>{
    try {
           let order=await Order.find().populate({path:"userId", select:{first_Name:1,address:1,_id:0}},
           {path:"productId", select:{ product_Name:1 , price:1 ,_id:0}}
           ).lean().exec()

           res.status(200).send({Orders:order});
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})


router.post("/create",async(req,res)=>{
    try {
        let order=await Order.create(req.body);
        res.status(201).send(order)
    } 
    catch (error) {
        res.status(500).send({error: error.message} );
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).populate({path:"userId", select:{first_Name:1,address:1,age:1,_id:0}},
        {path:"productId", select:{ product_Name:1 , price:1 ,quantity:1,_id:0}}).lean().exec();

        if (!order) {
          return res.status(404).send({result: "Order Not found.." });
        }
        return res.status(200).send(order);
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})


router.patch("/:id/edit",async(req,res)=>{
    try {
        let order=await Order.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({ order , message: "success" });
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
})
router.delete("/:id", async (req,res) => {
    try{
        const order = await Order.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(order);

    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

module.exports=router