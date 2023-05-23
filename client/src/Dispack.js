import React,{useState,useEffect,useRef} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import {CustNavbar} from './components/Navbar'
import DispackCSS from './Dispack.module.css'




export function Dispack()
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
    var data
    data=location.state.details.det
    console.log(location.state.details.det[0].dayno)
    console.log(data)
    return(
        <>
        <div className={DispackCSS.body}>
        <div className={DispackCSS.overlay}>
            <div className={DispackCSS.det}>
            <h1 className={DispackCSS.head1}><br/>Itinerary</h1>
            {data.map((elem,i)=>{
           
        return(
                  
            <>
                <br/><h2>Day No:{elem.dayno}</h2><br/>
                {/* <ul><li><h3>Ernakulam</h3></li></ul> */}
                <h3>{elem.dest}</h3><br/>
                <ul><li><h4>{elem.loc}</h4></li></ul><br/>
                <div className={DispackCSS.cards}>
                <img src={location.state.details.url[i]} style={{width: '400px'}} className={DispackCSS.card}/>
                </div>
                <br/><br/><h3>Activities</h3><br/>
                <ul>
                    <li>{elem.act}</li><br/>
                </ul>
                {/* <p><br/></p> */}

              </>
            )
              })} 
              </div>
         </div>
         </div>
        </>
       
        
    );
}


