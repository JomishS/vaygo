const mongoose=require('mongoose')

const packData = new mongoose.Schema({

    userid:{
        type:String,
    },

    pickpoint:{
        type:String,
         required:true,
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    det:{
        type:Array,
        required:true
    },
    url:{
        type:Array,
        required:true
    }

    // dayno:{
    //     type:String,
    //     required:true,
    // },
    // dest:{
    //     type:String,
    //     required:true,
    // },
    // fil:{
    //     type:String,
    //     required:true,
    // },
    // act:{
    //     type:String,
    //     required:true,
    // }

//})
},{collection:'package'})

// const packDet= new mongoose.Schema({

//         dayno:{
//             type:String,
//             required:true,
//         },
//         dest:{
//             type:String,
//             required:true,
//         },
//         fil:{
//             type:String,
//             required:true,
//         },
//         act:{
//             type:String,
//             required:true,
//         }
// },{collection:'package'})

module.exports=mongoose.model("package",packData)
// const Question = mongoose.model('package', packData)
// module.exports=Question

// mongoose.models = {}
//module.exports=mongoose.model('packakge',packDet)