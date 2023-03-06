import React,{useState,useEffect,useRef} from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import AppCSS from'./App2.module.css'


export function Login()
{
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('/isEligibleNoSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page")
        },(err)=>{
            navigate('/login')
        })

    },[])


    const [errName,setErrName] = useState('')
    var pwordPreserver=useRef(''),emailPreserver=useRef('')
    var email,pword
    
    email=emailPreserver.current.value
    pword=pwordPreserver.current.value

   
    return(
        <>
        <div className={AppCSS.test} id={AppCSS.leader}>
            <div className={AppCSS.hello}>
            <div className={AppCSS.title}>Welcome</div>
            <div className={AppCSS.App2}>
            <div className={AppCSS.authformcontainer}>
                <div className={AppCSS.loginform}>
                <input type="email" placeholder="Enter Email id" onChange={
                    (e)=>{
                    email= e.target.value;
                    setErrName('')
                    }
                } ref={emailPreserver}/><br/>
                <input type="password" placeholder="Enter Password" onChange={
                    (e)=>{
                    pword=e.target.value
                    setErrName('')
                    }
                } ref={pwordPreserver} /><br/>
                <p style={{color:'red'}}>{errName}</p>
                <button onClick={()=>{
                if(!email || !pword)
                {
                    alert('Please complete the user details')
                }
                else{
                    axios.post('/login',{email:email,password:pword}).then((res)=>{                
                        if(res.data=='customer')
                        {
                        navigate('/CustMain')
                        }
                        else if(res.data=='agency')
                        {
                            navigate('/AgenMain')
                        }
                    },(err)=>{
                        setErrName(err.response.data)
                    })
                }

                }}>Login</button>
                </div>
        
                <a className={AppCSS.linkbtn} href="/register">Don't have an account?Register here</a>
            </div>
        </div>
        </div>
        </div>
        
        </>
    )
}

export function Register()
{
    const navigate=useNavigate()

    useEffect(()=>{
       
        axios.get('/isEligibleNoSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session has expired")
        },(err)=>{
            navigate('/home')
        })

    },[])

    const [errorName,setErrorName] = useState('')
    const[val,setVal]=useState()
    var unamePreserver,pwordPreserver,emailPreserver,cwordPreserver,
    unamePreserver=useRef('') 
    pwordPreserver=useRef('') 
    emailPreserver=useRef('') 
    cwordPreserver=useRef('')
    var uname,email,pword,cword
    uname=unamePreserver.current.value
    email=emailPreserver.current.value
    pword=pwordPreserver.current.value
    cword=cwordPreserver.current.value   

    
    return(
        <>
        <div className={AppCSS.test} id={AppCSS.leader}>

        <div className={AppCSS.title}>Welcome</div>
            <div className={AppCSS.App2}>
            <div className={AppCSS.authformcontainer}>
                <div className={AppCSS.loginform}>
                <div style={{display:"flex",flexDirection:"row"}}>
                <input className={AppCSS.radiob} type="radio" name="role" value="customer"  onChange={
                    (e)=>{
            
                        setVal('customer')
                    }
                } /><p className={AppCSS.newRole} style={{color:"white"}}>Customer</p>
                <input className={AppCSS.radiob} type="radio" name="role" value="agency"  onChange={
                    (e)=>{
                    
                        setVal('agency')
                    }
                } /><p className={AppCSS.newRole} style={{color:"white"}}>Agency</p>
                </div>

        <input type="text" placeholder="Enter Username" onChange={
            (e)=>{
                uname=e.target.value
                setErrorName('')
            }
        } ref={unamePreserver} /><br/>
        <input type="email" placeholder="Enter Email id" onChange={
            (e)=>{
                email=e.target.value
                setErrorName('')
            }
        } ref={emailPreserver}/><br/>
        <input type="Password" placeholder="Enter Password" onChange={
            (e)=>{
                pword=e.target.value
                if(pword!=cword){
                    
                    setErrorName('Confirm password should match with password')
                }

                else{
                setErrorName('')
                }   
            }
        }
        ref={pwordPreserver}/><br/>
        <input type="Password" placeholder="Confirm password" onChange={
            (e)=>{
                cword=e.target.value
                if(pword!=cword){
                    
                    setErrorName('Confirm password should match with password')
                }

                else{
                setErrorName('')
                }

            }
        }
        ref={cwordPreserver}/><br/>
        <p style={{color:'red'}}>{errorName}</p>
        <button onClick={()=>{
            if(!uname || !pword || !email || !cword || !val)
            {
                alert("Please complete the details")
            }else{
                //console.log(val+' '+uname+' '+pword+' '+email)
                 axios.post('/register',{type:val,username:uname,password:pword,email:email}).then((res)=>{
                     console.log(res.data+" successful")
                     setErrorName('User created,Redirecting to login page...')
                     setTimeout(()=>{
                         navigate('/login')
                     },2000)
                 },(err)=>{
                     setErrorName(err.response.data)
                 })
            }
        }}>Register</button>
        </div>
  
        <a className={AppCSS.linkbtn} href="/login">Already have an account? Login here</a>
        </div>
        </div>
        </div>
        </>
    )
}