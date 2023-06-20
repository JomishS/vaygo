const mongoose=require('mongoose')

const bookData = new mongoose.Schema({

    agenid:{
        type:String,
    },

    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
         required:true,
    },
    num:{
        type:String,
        required:true
    },
    num2:{
        type:String
    },
    add:{
        type:String,
        required:true
    }


},{collection:'book'})



module.exports=mongoose.model("book",bookData)
