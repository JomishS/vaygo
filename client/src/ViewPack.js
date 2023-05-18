import React,{useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import {AgenNavbar} from './components/Navbar'

export function AgenMain()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
            console.log(res.data)
        },(err)=>{
            navigate('/login')
        })  
    },[])

    return(
        <>
        </>
    )
}