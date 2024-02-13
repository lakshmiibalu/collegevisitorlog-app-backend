const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const vistorRoute = require("./controllers/visitorRoute")
const guardsRoute = require("./controllers/guardsRoute")
const signinRoute = require("./controllers/signinRoute")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/visitorsDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/visitors",vistorRoute)
app.use("/api/guards",guardsRoute)
app.use("/api/signin",signinRoute)

app.listen(3002,()=>{
    console.log("Server Running")
})