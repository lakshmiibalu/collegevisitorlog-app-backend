const express = require("express")


const router = express()
const bcrypt = require("bcryptjs")
const guardsModel = require("../models/guardsModel")

router.post("/guardslogin",async(req,res)=>{

    let input = req.body
    let email = req.body.email

    let data = await guardsModel.findOne({"email":email})
    if (!email) {
        return res.json(
            {
                status:"invalid user"
            }
        )
        
    }

    console.log(data)
    let dbPassword = data.password
    let inputPassword = req.body.password

    console.log(dbPassword)
    console.log(inputPassword)

    const match = await bcrypt.compare(inputPassword,dbPassword)

    if (!match) {

        return res.json({
            status:"incorrect password"
        })
        
    }

    res.json(
        {
            status:"success","userData":data
        }
    )
    

})



module.exports = router