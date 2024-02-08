const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const vistorRoute = require("./controllers/visitorRoute")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/visitorsDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/visitors",vistorRoute)

app.listen(3002,()=>{
    console.log("Server Running")
})