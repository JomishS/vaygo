
const express=require('express')
const mongoose=require('mongoose')
const MongoStore=require('connect-mongo')
const session=require('express-session')
const app=express()
var cors = require('cors')
const corsConfig = {
    origin: true,
    credentials: true,
};


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/waygo")
const userCollection=require('./userSchema')
const custCollection=require('./custSchema')


const sessionStore=MongoStore.create({
    mongoUrl:'mongodb://127.0.0.1:27017/waygo',
    collection:'sessions'
})
const sessionCollection = require('./sessionSchema')


app.use(cors(corsConfig))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.options('*',cors(corsConfig))
app.use(session({
    secret:'secret key123',
    saveUninitialized:false,//saveUninitialised:false->prevents unchanged/"newly created session doc without any data added to it" from storing into the database
    resave:false,
    store:sessionStore,
    cookie:{
        maxAge:1000*60*60*24
    }
}))


app.post('/login',(req,res)=>{

console.log(req.body)
userCollection.find({email:req.body.email,password:req.body.password}).then((res1)=>{
    console.log('Successful')
    if(res1.length==0)
    {

        res.status(404).send("Incorrect username or password")
    }
    else{

        req.session.userId=res1[0].id
        req.session.username=res1[0].username
        req.session.userType=res1[0].type1

        res.send(req.session.userType)
        
    }
},(err)=>{
    console.log('Error')
    res.status(404).send("Error occured in fetching data")
})

})


app.post('/register',(req,res)=>{

    console.log(req.body.type)
    userCollection.create({type1:req.body.type,username:req.body.username,email:req.body.email,password:req.body.password}).then((res2)=>{
        
        console.log('Successful')
        res.send()
    },(err)=>{
        console.log(err)
        if(err.code===11000)
        {
            console.log("User already exists")
            res.status(404).send("User already exists")
        }
    })


})
app.post('/customize',(req,res)=>{

    console.log(req.body.type)
    custCollection.create({pickpoint:req.body.pickpoint,destination:req.body.destination,pickdate:req.body.pickdate,picktime:req.body.picktime,preffered:req.body.preffered,food:req.body.food,adult:req.body.adult,children:req.body.children,infant:req.body.infant,returndate:req.body.returndate,checktime:req.body.checktime,fare:req.body.fare,adventure:req.body.adventure,camping:req.body.camping,name:req.body.name,num:req.body.num,email:req.body.email,address:req.body.address}).then((res3)=>{
        /*pickpoint:pickpo,destination:dest,pickdate:pickdate,prefferedhotel:preho,foodtype:fotyp,adult:adult,children:chil,infant:inf,returndate:redate,checktime:chetime,name:name,num:num,email:email,address:add*/
        /*,destination:req.body.destination,pickdate:req.body.pickdate,adult:req.body.adult,children:req.body.children,infant:req.body.infant,returndate:req.body.returndate,checktime:req.body.checktime,name:req.body.name,num:req.body.num,email:req.body.email,adddress:req.body.address*/
       console.log('Successful')
        res.send()
    },(err)=>{
        console.log(err)
        if(err.code===11000)
        {
            console.log("form cannot be submitted")
            res.status(404).send("form cannot be submitted")
        }
    })


})


app.get('/isEligibleNoSession',(req,res)=>{
  
    sessionCollection.find({session:JSON.stringify(req.session)}).then((res1)=>{
        if(res1.length==0)//no session document/session expired
        {
            res.send('eligible for this page')
        }else{
            res.status(404).send('not eligible for this page')
        }
    },(err)=>{
        console.log('error')
    })

})


app.get('/isEligibleWithSession',(req,res)=>{

    sessionCollection.find({session:JSON.stringify(req.session)}).then((res1)=>{
        if(res1.length==0) //no session document/session expired
        {
            res.status(404).send('Not eligible')
        }else{
            res.send('Eligible for this page')
        }
    },(err)=>{
        console.log('Error')
    })


})


/*app.get('/getProfileDetails',(req,res)=>{
    sessionCollection.find({session:JSON.stringify(req.session)}).then((res1)=>{
        if(res1.length!=0)
        {
           var sessiondata=JSON.parse(res1[0].session)

           userCollection.find({_id:mongoose.Types.ObjectId(sessiondata.userId)}).then((res2)=>{

            if(res2.length!=0)
            {
                console.log(res2[0])
                res.json({username:res2[0].username,email:res2[0].email})
            }

           },(err1)=>{
            console.log(err1)
           })
        }else{

        }
    })
})*/


app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.send('Logged out')

})

app.listen(5000,()=>{
    console.log("Listening on port 5000...")
})
