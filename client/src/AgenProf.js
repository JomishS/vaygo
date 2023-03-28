import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AgenProfCSS from './AgenProf.module.css'




export function AgenProf()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])
    /*src="https://unsplash.com/s/photos/random-people"*/

    return(
        <>
           <div className={AgenProfCSS.headerwrapper}>
                <header className={AgenProfCSS.header}/>
                    <div className={AgenProfCSS.colscontainer}>
                        <div className={AgenProfCSS.leftcol}>
                            <div className={AgenProfCSS.imgcontainer}>
                                <img className={AgenProfCSS.img} />
                                <span className={AgenProfCSS.span}></span>
                            </div>
                            <h2 className={AgenProfCSS.heading}>Komban</h2>
                            <p className={AgenProfCSS.des}>Trips and Tours</p>
                                            

                            <div className={AgenProfCSS.content}>
                                <p className={AgenProfCSS.para}>
                                We are extemely happy to invite everyone to our trip
                                </p>

                                <ul className={AgenProfCSS.linkhead}>
                                <li className={AgenProfCSS.links}><i className={AgenProfCSS.fab}></i></li>
                                <i className={AgenProfCSS.fab}></i>
                                <i className={AgenProfCSS.fab}></i>
                                <i className={AgenProfCSS.fab}></i>
                                </ul>
                            </div>
                        </div>
                <div className={AgenProfCSS.rightcol}>
                <nav className={AgenProfCSS.navb}>
                    <ul className={AgenProfCSS.tabs}>
                    <li ><a className={AgenProfCSS.taba} href="">PHOTOS</a></li>
                    <li ><a className={AgenProfCSS.taba} href="">ABOUT</a></li>
                    </ul>
                    <button className={AgenProfCSS.button}>Edit Profile</button>
                </nav>

                <div class={AgenProfCSS.photos}>
                    <img className={AgenProfCSS.img2} src="./bg.webp" alt="" />
                    <img className={AgenProfCSS.img2} src="img/img_2.avif" alt="" />
                    <img className={AgenProfCSS.img2} src="img/img_3.avif" alt="" />
                    <img className={AgenProfCSS.img2} src="img/img_4.avif" alt="" />
                    <img className={AgenProfCSS.img2} src="img/img_5.avif" alt="" />
                    <img className={AgenProfCSS.img2} src="img/img_6.avif" alt="" />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
