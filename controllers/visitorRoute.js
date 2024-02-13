const express = require("express")
const visitorModel = require("../models/visitorModel")

const router = express.Router()

router.get("/viewvisitors",async(req,res)=>{
    let data = await visitorModel.find()
    .populate("userId","name")
    .exec()
    res.json(data)
})

router.post("/addvisitor",async(req,res)=>{
    let data = req.body
    let visitor = new visitorModel(data)
    let result = await visitor.save() 
    res.json(
        {
            status:"success"
        }
    )
})

module.exports = router