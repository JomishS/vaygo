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


/*const custData = new mongoose.Schema({

    pickpoint:{
        type:String,
        required:true,
        unique:true
    }
   /* destination:{
        type:String,
        required:true,
        unique:true
    },
    pickdate:{
        type:String,
        required:true,
        unique:true
    },
    prefferedhotel:{
        type:String,
        required:true,
        unique:true
    },
    foodtype:{
        type:String,
        required:true,
        unique:true
    },
    adult:{
        type:String,
        required:true,
        unique:true
    },
    children:{
        type:String,
        required:true,
        unique:true
    },
    infant:{
        type:String,
        required:true,
        unique:true
    },
    returndate:{
        type:String,
        required:true,
        unique:true
    },
    checktime:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    num:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        unique:true
    }

},{collection:'customize'})*/

module.exports=mongoose.model("users",userData)
//module.exports=mongoose.model("customize",custData)