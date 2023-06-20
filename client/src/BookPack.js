import React,{useState,useEffect,useRef} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import BookCSS from './BookPack.module.css'





export function BookPack()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

    const location=useLocation();
    // console.log(location.state.agenid)

    const [errorName,setErrorName] = useState('')

    var namePreserver,emailPreserver,numPreserver,num2Preserver,addPreserver

    namePreserver=useRef('')
    emailPreserver=useRef('')
    numPreserver=useRef('')
    num2Preserver=useRef('')
    addPreserver=useRef('')

    var name,email,num,num2,add

    name=namePreserver.current.value
    email=emailPreserver.current.value
    num=numPreserver.current.value
    num2=num2Preserver.current.value
    add=addPreserver.current.value

    return(
        <>
         <body className={BookCSS.body}>
            <div className={BookCSS.div}>
                <br/>
                <h2><u>Customer Contact Details</u></h2>
                <br/>
                <br/><br/><br/>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                }}> 
                <label>Name: </label>
                <input type="Text" className={BookCSS.input} required onChange={
                    (e)=>{
                        name=e.target.value  
                        setErrorName('')
                    
                    }
                } ref={namePreserver}/>
                <br/><br/><br/>

                <label>Email ID: </label>
                <input type="Text" className={BookCSS.input} required onChange={
                    (e)=>{
                        email=e.target.value  
                        setErrorName('')
                    
                    }
                } ref={emailPreserver} />
                <br/><br/><br/>
            
                <label>Contact Number 1: </label>
                <input type="tel" className={BookCSS.input} required onChange={
                    (e)=>{
                        num=e.target.value  
                        setErrorName('')
                    
                    }
                } ref={numPreserver}/>
                &emsp;&emsp;&emsp;&emsp;&ensp;

                <label>Contact Number 2: </label>
                <input type="tel" className={BookCSS.input} onChange={
                    (e)=>{
                        num2=e.target.value  
                        setErrorName('')
                    
                    }
                } ref={num2Preserver}/>
                <br/><br/><br/>

                <label>Address: </label>
                <input type="Text" className={BookCSS.input} required id={BookCSS.address} onChange={
                    (e)=>{
                        add=e.target.value  
                        setErrorName('')
                    
                    }
                } ref={addPreserver}/>
                <br/><br/>
            <div>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={()=>{
            if(!name || !num || !email || !add)
            {
                alert("Please complete the details")
            }else{
                //console.log(pickpo+' '+dest+' '+pickdate+' '+picktime+' '+preho+' '+fotyp+' '+adult+' '+chil+' '+inf+' '+redate+' '+chetime+' '+name+' '+num+' '+email+' ' +add+' ')
                 axios.post('/book',{agenid:location.state.agenid,name:name,email:email,num:num,num2:num2,add:add}).then((res)=>{
                     console.log(res.data+" successful")
                    // setErrorName('Value added')
                     //navigate('/CustMain')
                    //  setTimeout(()=>{
                    //      navigate('/CustMain')
                    //  },2000)
                      navigate('/CustMain')
                 },(err)=>{
                    setErrorName(err.response.data)
                 })
            }
            }} type='submit'>Submit</button>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button type='reset'>Reset</button>
            </div>
             </form> 
        </div>

       
       

    </body>
        </>
    )
}