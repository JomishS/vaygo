import React,{useEffect,useState,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddCSS from './AddPack.module.css'
import ipfs from './ipfs'



export function AddPack()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

    const [formFields, setFormFields] = useState([
      { dest: '', destp: '' },
    ])
  
    const handleFormChange = (event, index) => {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    }
  
    const submit = (e) => {
      e.preventDefault();
      console.log(formFields)
    }
  
    const addFields = () => {
      let object = {
        dest: '',
        destp: '' 
      }
  
      setFormFields([...formFields, object])
    }
  
    const removeFields = (index) => {
      let data = [...formFields];
      data.splice(index, 1)
      setFormFields(data)
    }
    const addSearch=(inputVal)=>{
      var a=document.getElementById('activitySection')
      var b=document.createElement('div')
      b.textContent=inputVal
      a.append(b)
    }


    return(
        <>
    <div className={AddCSS.leader}>
    <section className={AddCSS.container}>
      <header className={AddCSS.header}>Add Package</header>
      <form className={AddCSS.form} onSubmit={submit}>
        <div className={AddCSS.inputbox}>
          <label className={AddCSS.label}>Pick Up Point</label>
          <input className={AddCSS.inputf} type="text" placeholder="Enter Place name" required />
        </div>
      {formFields.map((form,index)=>{
        return(
          <>
          <div className={AddCSS.rep} key={index}>
            <label className={AddCSS.label}>Enter Destination</label><br/>
            <input className={AddCSS.input} type="name" placeholder="Enter Place name" onChange={event=>handleFormChange(event,index)} value={form.name} required />
            <label className={AddCSS.label}>Upload images of destination</label><br/>
           {/* <input className={AddCSS.inpui} type="file" onChange={event=>handleFormChange(event,index)} value={form.file}></input><br/><br/>*/}
           <input className={AddCSS.inpui} type='file' ></input><br/><br/>
            <label className={AddCSS.label}>Select the activities</label><br/>
            <div id='activitySection'></div>
            <input type="text" id='activityInput' onKeyDown={(e)=>{
              if(e.key=='Enter')
              {
  
                addSearch(e.target.value)
              }
            }} onChange={event=>handleFormChange(event,index)} value={form.text}/><br/><br/>

            <button className={AddCSS.button} onClick={addFields}>Add Destination</button>


            <button className={AddCSS.button} onClick={addFields}>Add Day</button>
            <button className={AddCSS.button} onClick={()=>removeFields(index)}>Remove</button>
            
            </div>
            </>
        )
      })}

        </form>
        <br/>
        <button  onClick={submit}>Submit</button>
      
    </section>
    </div>
        </>
    )
}