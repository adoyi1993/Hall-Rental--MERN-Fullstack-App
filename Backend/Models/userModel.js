const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
        name: {
            type: String, 
            required: [true, "Please add a name"]
        },

        email: {
            type: String,
            required: [true, "please add an email"],
            trim: true,
            unique: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid email"
            ]
        },

        password: {
            type: String,
            required: [true, "please add a password"],
            minLength: [6, "Password must be upto 6 characters"],
            maxLength: [200, "Password must no exceed 200 characters"],
        }


}, 
{
    timestamps: true,
})



userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return next()
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hassedPassword = await bcrypt.hash(this.password, salt)
    this.password = hassedPassword
    next() 
})
const User = mongoose.model("User", userSchema)
module.exports = User