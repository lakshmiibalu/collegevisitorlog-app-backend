const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema(
    
    { vistorName: String,
    vistorPhone: String,
    vistorAadhar:String,
    vistorPlace:String,
    PurposeOfVisit:String}
)
module.exports = mongoose.model("visitors",visitorSchema)