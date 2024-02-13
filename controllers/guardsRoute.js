const express = require("express")
const adminModel = require("../models/guardsModel")

const router = express.Router()
const bcrypt = require("bcryptjs")
const guardsModel = require("../models/guardsModel")
hashPasswordgenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addguards",async(req,res)=>{
    let {data} = {"data":req.body}
    let password = data.password
    console.log(password)
    const hashedPassword = await hashPasswordgenerator(password)
    data.password = hashedPassword
    let guard = new guardsModel(data)
    let result = await guard.save()
    res.json({
        status:"success"
    })
})



router.get("/viewguards",async(req,res)=>{
    let data = await guardsModel.find()
    res.json(data)
})


module.exports = router