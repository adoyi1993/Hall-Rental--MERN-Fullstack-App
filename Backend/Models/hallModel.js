const mongoose = require ("mongoose");
const hallSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            default: "Hall Name"
        },
        description:{
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: true
        },
        isAvailable:{
            type: Boolean,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        carousalImages:[],
        rentPerDay:{
            type: Number,
            required: true
        },
        phone:{
            type: String,
            required: true
        }

}, {
    timeStamps: true,
})


const Hall = mongoose.model('Hall', hallSchema)
module.exports = Hall