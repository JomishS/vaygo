/*import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CuconCSS from './CurrenCon.module.css'
//import {Conv} from'./Conv'



export function CurrenCon()
{
    const navigate=useNavigate()

    useEffect(()=>{
     
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

    const select = document.querySelectorAll("#currency");
    console.log(select)
    const btn = document.getElementById("btn");
    //console.log(btn)
    const num = document.getElementById("num");
    const ans = document.getElementById("ans");
    
    fetch("https://api.frankfurter.app/currencies")
      .then((data) => data.json())
      .then((data) => {
        //console.log(data)
        display(data);
      });
    
    function display(data) {
      const entries = Object.entries(data);
      console.log(entries[1][0])
      for (var i = 0; i < entries.length; i++) {
        select.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      
      }
    }
    
    btn.addEventListener("click", () => {
      let currency1 = select[0].value;
      let currency2 = select[1].value;
      let value = num.value;
    
      if (currency1 != currency2) {
        convert(currency1, currency2, value);
      } else {
        alert("Choose Different Currencies !!!");
      }
    });
    
    function convert(currency1, currency2, value) {
      const host = "api.frankfurter.app";
      fetch(
        `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
      )
        .then((val) => val.json())
        .then((val) => {
          console.log(Object.values(val.rates)[0]);
          ans.value = Object.values(val.rates)[0];
        });
    }

    return(
        <>
        <div className={CuconCSS.container}>
        <h1 className={CuconCSS.h1}>Currency Convertor</h1>
        <div className={CuconCSS.box}>
            <div className={CuconCSS.leftbox}>
                <select id="currency" className={CuconCSS.currency}>

                </select>
                <input type="number" name="" id='num' className={CuconCSS.input}/>
            </div>
            <div className={CuconCSS.rightbox}>
                <select name="currency" className={CuconCSS.currency}></select>
                <input type="text" name="" id='ans' className={CuconCSS.input}  disabled/>
            </div>
        </div>
        <button className={CuconCSS.btn} id="btn">Convert</button>
    </div>


        </>
    )
}*/