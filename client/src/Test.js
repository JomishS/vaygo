import React from 'react'
import axios from 'axios'

export function Test()
{
    return(
        
                <div>
                    <input className="user" type="text" placeholder='Enter username'></input>
                    <input className="user" type="text" placeholder='Enter password'></input>
                    <button className="login" type="button">Login</button>
                    <button className="login" type='button'>Sign up</button>
                    <button onClick={()=>{
                        axios.post('http://localhost:5000/hello',{myMessage:"hey all"}).then((res)=>{
                        console.log(res.data)
                        })
                    }}>Hello</button>
                </div>
    )
}
