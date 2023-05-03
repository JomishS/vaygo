import React,{useState} from "react"


export const Register = (props) => {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[name,setName]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(email);
    }
  return (
    <>
        
    <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div style={{display:"flex",flexDirection:"row"}}>
          <input className="radiob" type="radio" name="role" value="customer"/><p className="newRole" style={{color:"white"}}>Customer</p>
          <input className="radiob" type="radio" name="role" value="agency"/><p className="newRole" style={{color:"white"}}>Agency</p>
          </div>
            <input value={name} name="name" id="name" placeholder="Enter full name"/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter emaild"></input>
            <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" id="password" placeholder="Enter password"></input>
            <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" id="conf-password" placeholder="Confirm password"></input>
            <button type="submit">Register</button>
        </form>
    <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account?Login here</button>
    </div>
    </>
  )
}
     