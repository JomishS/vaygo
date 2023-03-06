import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AgenNavbar} from './components/Navbar'
import AgenMainCSS from './AgenMain.module.css'

export function AgenMain()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

    return(
        <>
        <AgenNavbar/>
        <div id={AgenMainCSS.leader}>
        <div className={AgenMainCSS.check}>
        <button className={AgenMainCSS.size}>Add Package</button><br/>
        <button className={AgenMainCSS.size}>Edit Package</button><br/>
        <button className={AgenMainCSS.size}>Delete Package</button>
        </div>
        </div>
        </>
    )
}