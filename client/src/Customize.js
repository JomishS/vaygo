import React,{useEffect,useState,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import CustomizeCSS from './Customize.module.css'



export function Customize()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

   /* handleFocus(event){
        event.target.type='date';
    }
    onFocus={this.handleFocus.bind()*/

    //onFocus={(e)=>e.target.type='date'



    const [errorName,setErrorName] = useState('')
    const[val,setVal]=useState()
    const[val2,setVal2]=useState()
    const[val3,setVal3]=useState()
    const[select,setSelect]=useState()
    const[select2,setSelect2]=useState()

    var pickpoPreserver,destPreserver,pickdatePreserver,picktimePreserver,prehoPreserver,fotypPreserver,adultPreserver,chilPreserver,infPreserver,redatePreserver,chetimePreserver,namePreserver,numPreserver,emailPreserver,addPreserver

    pickpoPreserver=useRef('')
    destPreserver=useRef('')
    pickdatePreserver=useRef('')
    picktimePreserver=useRef('')
    prehoPreserver=useRef('')
    fotypPreserver=useRef('')
    adultPreserver=useRef('')
    chilPreserver=useRef('')
    infPreserver=useRef('')
    redatePreserver=useRef('')
    chetimePreserver=useRef('')
    namePreserver=useRef('')
    numPreserver=useRef('')
    emailPreserver=useRef('')
    addPreserver=useRef('')

    var pickpo,dest,pickdate,picktime,preho,fotyp,adult,chil,inf,redate,chetime,name,num,email,add

    pickpo=pickpoPreserver.current.value
    dest=destPreserver.current.value
    pickdate=pickdatePreserver.current.value
    picktime=picktimePreserver.current.value
    preho=prehoPreserver.current.value
    fotyp=fotypPreserver.current.value
    adult=adultPreserver.current.value
    chil=chilPreserver.current.value
    inf=infPreserver.current.value
    redate=redatePreserver.current.value
    chetime=chetimePreserver.current.value
    name=namePreserver.current.value
    num=numPreserver.current.value
    email=emailPreserver.current.value
    add=addPreserver.current.value


    
    return(
        <>
        <div id={CustomizeCSS.leader}>
        <div className={CustomizeCSS.container}>

        <form className={CustomizeCSS.formgroup} method="POST" >
            <h1 className={CustomizeCSS.textcenter}>Package Customization Form</h1>

            <div className={CustomizeCSS.form}>
                <h2 className={CustomizeCSS.textwhite}>Package Details</h2>

            <div className={CustomizeCSS.input1}>
                <input className={CustomizeCSS.inputgroup1} type="text" placeholder="Pick-Up point" onChange={
                    (e)=>{
                        pickpo=e.target.value  
                        setErrorName('')
                    
                    }
                } ref={pickpoPreserver} />
                <input className={CustomizeCSS.inputgroup1} type="text" placeholder="Destination" onChange={
                    (e)=>{
                        dest=e.target.value
                        setErrorName('')
                      
                    }
                } ref={destPreserver} />
                <input className={CustomizeCSS.inputgroup1} type="text" placeholder="Pick-Up Date" onFocus={(e)=>e.target.type='date'} onChange={
                    (e)=>{
                        pickdate=e.target.value
                        setErrorName('')
                      
                    }
                } ref={pickdatePreserver} />
                <input className={CustomizeCSS.inputgroup1} type="text" placeholder="Pick-Up Time" onFocus={(e)=>e.target.type='time'} onChange={
                    (e)=>{
                        picktime=e.target.value
                        setErrorName('')
                      
                    }
                } ref={picktimePreserver} />
                <select  className={CustomizeCSS.inputgroup1} value={select} onChange={
                    (e)=>{
                        setSelect(e.target.value)
                        
                    }} >
                    <option >Preffered Hotel Type</option>
                    <option >Luxury stays</option>
                    <option >5 star</option>
                    <option >3 star</option>
                    <option >cottage</option>
                    <option >Budget friendly</option>
                    
                </select>
                <select  className={CustomizeCSS.inputgroup1} value={select2} onChange={
                    (e)=>{
                        setSelect2(e.target.value)
                        
                    }}>
                    <option >Food type</option>
                    <option >Vegetarian</option>
                    <option >Non-veg</option>
                    <option >Both</option>
                </select>
            </div>

                <div className={CustomizeCSS.input2}>
                    <input className={CustomizeCSS.inputgroup2} type="number" placeholder="Adult" onChange={
                    (e)=>{
                        adult=e.target.value
                        setErrorName('')
                      
                    }
                }  ref={adultPreserver}/>
                    <input className={CustomizeCSS.inputgroup2} type="number" placeholder="Children(2-11years)" onChange={
                    (e)=>{
                        chil=e.target.value
                        setErrorName('')
                      
                    }
                } ref={chilPreserver}/>
                    <input className={CustomizeCSS.inputgroup2} type="number" placeholder="Infant(under 2years)" onChange={
                    (e)=>{
                        inf=e.target.value
                        setErrorName('')
                      
                    }
                } ref={infPreserver}/>
                </div>

                <div id={CustomizeCSS.input3}>
                    <span className={CustomizeCSS.textprimary}>Select Your Fare</span> 
                    <input className={CustomizeCSS.inputgroup3} type="radio" name="fare" onChange={
                    (e)=>{
                        setVal('One Way')
                        
                    }}/>
                    <label className={CustomizeCSS.radiob} for="input-group">One Way</label>
                    <input className={CustomizeCSS.inputgroup3} type="radio" name="fare" onChange={
                    (e)=>{
                        setVal('Round Trip')
                        
                    }}/>
                    <label className={CustomizeCSS.radiob} for="input-group">Round Trip</label><br/>

                    <span className={CustomizeCSS.textprimary}>Adventure Sports</span> 
                    <input className={CustomizeCSS.inputgroup3} type="radio" name="sports" onChange={
                    (e)=>{
                        setVal2('yes')
                        
                    }}/>
                    <label className={CustomizeCSS.radiob} for="input-group">Yes</label>
                    <input className={CustomizeCSS.inputgroup3} type="radio" name="sports" onChange={
                    (e)=>{
                        setVal2('no')
                        
                    }}/>
                    <label className={CustomizeCSS.radiob} for="input-group">No</label><br/>

                    <span className={CustomizeCSS.textprimary}>Night Camping</span> 
                    <input className={CustomizeCSS.inputgroup3} type="radio" name="camping" onChange={
                    (e)=>{
                        setVal3('yes')
                        
                    }}/>
                    <label className={CustomizeCSS.radiob} for="input-group">Yes</label>
                    <input className={CustomizeCSS.inputgroup3} type="radio" name="camping" onChange={
                    (e)=>{
                        setVal3('no')
                        
                    }}/>
                    <label className={CustomizeCSS.radiob} for="input-group">No</label>
                    
                </div>

                <div className={CustomizeCSS.input4}>
                    <input className={CustomizeCSS.inputgroup4} type="text" placeholder="Return Date" onFocus={(e)=>e.target.type='date'} onChange={
                    (e)=>{
                        redate=e.target.value
                        setErrorName('')
                      
                    }
                }ref={redatePreserver} />
                    <input className={CustomizeCSS.inputgroup4} type="text" placeholder="Check Out time" onFocus={(e)=>e.target.type='time'} onChange={
                    (e)=>{
                        chetime=e.target.value
                        setErrorName('')
                      
                    }
                } ref={chetimePreserver} />
                </div>

                <div className={CustomizeCSS.input5}>
                    <h2 className={CustomizeCSS.textwhite}>Personal Details</h2>
                </div>

                <div className={CustomizeCSS.input6}>
                    <input className={CustomizeCSS.inputgroup6} type="text" placeholder="Full Name" onChange={
                    (e)=>{
                        name=e.target.value
                        setErrorName('')
                      
                    }
                }ref={namePreserver} />
                    <input className={CustomizeCSS.inputgroup6} type="number" placeholder="Phone Number" onChange={
                    (e)=>{
                        num=e.target.value
                        setErrorName('')
                      
                    }
                }ref={numPreserver}/>
                    <input className={CustomizeCSS.inputgroup61} type="email" placeholder="Email" onChange={
                    (e)=>{
                        email=e.target.value
                        
 
                    }
                } ref={emailPreserver}/>
                    <input className={CustomizeCSS.inputgroup61} type="text" placeholder="Address" onChange={
                    (e)=>{
                        add=e.target.value
                        setErrorName('')
                      
                    }
                } ref={addPreserver} />
                </div>
                <p style={{color:'red'}}>{errorName}</p>
               {/* <p style={{color:'red'}}>{errName}</p>*/}               
            
                {/*|| !dest || !pickdate || !picktime || !adult || !chil || !inf || !redate || !chetime || !name || !num || !email || !add*/}
                {/*,destination:dest,pickdate:pickdate,prefferedhotel:preho,foodtype:fotyp,adult:adult,children:chil,infant:inf,returndate:redate,checktime:chetime,name:name,num:num,email:email,address:add*/}
        <button onClick={()=>{
            if(!pickpo || !dest || !pickdate || !picktime || !adult || !chil || !inf || !redate || !chetime || !name || !num || !email || !add || !select || !select2 || !val || !val2 ||!val3)
            {
                alert("Please complete the details")
            }else{
                //console.log(pickpo+' '+dest+' '+pickdate+' '+picktime+' '+preho+' '+fotyp+' '+adult+' '+chil+' '+inf+' '+redate+' '+chetime+' '+name+' '+num+' '+email+' ' +add+' ')
                 axios.post('/customize',{pickpoint:pickpo,destination:dest,pickdate:pickdate,picktime:picktime,preffered:select,food:select2,adult:adult,children:chil,infant:inf,returndate:redate,checktime:chetime,fare:val,adventure:val2,camping:val3,name:name,num:num,email:email,address:add}).then((res)=>{
                     console.log(res.data+" successful")
                     setErrorName('Value added')
                     //navigate('/CustMain')
                    //  setTimeout(()=>{
                    //      navigate('/CustMain')
                    //  },2000)
                      navigate('/CustMain')
                 },(err)=>{
                    setErrorName(err.response.data)
                 })
            }
        }} type='submit' className={CustomizeCSS.submit}  >POST</button>
                <button type="reset" className={CustomizeCSS.reset}>CLEAR </button>
            </div>

        </form>

    </div>
    </div>
        </>
    )
}
/*onSubmit={(e)=>{
            e.preventDefault()
        }}*/