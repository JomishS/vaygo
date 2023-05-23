import React,{useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import {AgenNavbar} from './components/Navbar'
import AgenMainCSS from './AgenMain.module.css'

export function AgenMain()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('https://vaygo.vercel.app/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
            console.log(res.data)
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
       <Link to='/ViewPack'><button className={AgenMainCSS.size}>View All Packages</button></Link><br/>
        </div>
        </div>
        </>
    )
}
