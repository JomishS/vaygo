import React,{useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
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
       <Link to='/AddPack'> <button className={AgenMainCSS.size}>Add Package</button></Link><br/>

       <Link to='/Sample'><button className={AgenMainCSS.size}>Edit Package</button></Link><br/>
       <Link to='/Delete'><button className={AgenMainCSS.size}>Delete Package</button></Link><br/>
        <button className={AgenMainCSS.size}>View All Packages</button>
        </div>
        </div>
        </>
    )
}