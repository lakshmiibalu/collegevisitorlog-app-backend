const mongoose = require("mongoose")

const siginSchema = mongoose.Schema(
    {
        
        email:String,
        password:String

    }
)

module.exports = mongoose.model("signin",siginSchema)