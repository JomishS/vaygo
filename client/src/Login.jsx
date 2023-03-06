import React,{useState} from "react"

export const Login = (props) => {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(email)
    }
  return (
    <div className="auth-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter emaild"></input>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" id="password" placeholder="Enter password"></input>
        <button type="submit">Login</button>
    </form>
    <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register here</button>
    </div>
  )
}

