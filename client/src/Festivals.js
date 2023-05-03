import React,{useEffect,useState} from 'react'
// import '../../App.css'
import { useNavigate,Link } from 'react-router-dom'
import FestCSS from './Festivals.module.css'

import { Navbar } from './components/Navbar';
export function Festivals()
{
    const navigate=useNavigate()


    


    return(
        <>
      <Navbar/>
            {/* <head>
                <title>timeline</title>
            </head> */}
            <body className={FestCSS.festbg}>
            <div className={FestCSS.container}>

                <div className={FestCSS.header}>
                    <h1 className={FestCSS.header1}>FESTIVALS</h1>
                </div>

                <div>
                <h2 className={FestCSS.header2}> Select a State</h2>
                <div>
                    {/* <select id={FestCSS.country} onchange={countryHandler(this.value)}> */}
                    <select id={FestCSS.country}  onChange={
                        (e)=>{

                                console.log(e.target.value)
                                if(e.target.value=='KL')
                                {
                                    navigate('/Kerala')
                                }
                                if(e.target.value=="TN")
                                {
                                    navigate('/TamilNadu')
                                }
                    
                                if(e.target.value=="KN")
                                {
                                    navigate('/Karnataka')
                                }
                    
                                if(e.target.value=="HP")
                                {
                                    navigate('/Himachal')
                                }
                    
                                if(e.target.value=="RJ")
                                {
                                    navigate('/Rajastan')
                                }
                        }} >
                    {/* <select id={FestCSS.country} > */}
                        
                        <option disabled selected value>Select Option</option>
                        <option value="KL">Kerala</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="KN">Karnataka</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="RJ">Rajasthan</option>
                        
                </select>
                
                </div>
                    
        {/* <script>
            function countryHandler(value) {
                if (value=="KL"){
                    window.open(`kl.html`)
                }
                
                if(value=="TN"){
                window.open(`tn.html`)
                }

                if(value=="KN"){
                window.open(`kn.html`)
                }

                if(value=="HP"){
                window.open(`hp.html`)
                }

                if(value=="RJ"){
                window.open(`rj.html`)
                }
            }
        </script> */}
        </div>
        
    </div>
    </body>
        </>
    );
}