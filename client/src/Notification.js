import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export function Notification()
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
           
        </>
    )
}