const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema(
    
    { 
        userId : {
            type:mongoose.Schema.Types.ObjectId,
            required : true,
            ref:"guards"
        },
        vistorName: String,
        vistorPhone: String,
        vistorAadhar:String,
        vistorPlace:String,
        PurposeOfVisit:String
    }
)
module.exports = mongoose.model("visitors",visitorSchema)