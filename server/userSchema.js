const mongoose=require('mongoose')

const userData = new mongoose.Schema({

    type1:{
        type:String,
        unique:false,
        required:false
    },

    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }

},{collection:'users'})




module.exports=mongoose.model("users",userData)
//module.exports=mongoose.model("customize",custData)