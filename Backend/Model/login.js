const mongoose = require('mongoose');

const Schema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    remembered:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("FutHub",Schema);