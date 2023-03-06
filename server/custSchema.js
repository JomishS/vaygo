const mongoose=require('mongoose')

const custData = new mongoose.Schema({

    pickpoint:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    pickdate:{
        type:String,
        required:true,
    },
    picktime:{
        type:String,
        required:true,
    },
    preffered:{
        type:String,
        required:true,
    },
    food:{
        type:String,
        required:true,
    },
    adult:{
        type:String,
        required:true,
    },
    children:{
        type:String,
        required:true,
    },
    infant:{
        type:String,
        required:true,
    },
    returndate:{
        type:String,
        required:true,
    },
    checktime:{
        type:String,
        required:true,
    },
    fare:{
        type:String,
        required:true,
    },
    adventure:{
        type:String,
        required:true,
    },
    camping:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    num:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }



},{collection:'customize'})

module.exports=mongoose.model("customize",custData)