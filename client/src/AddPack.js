import React,{useEffect,useState,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddCSS from './AddPack.module.css'
//import ipfs from './ipfs'



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
    
   // const[image,setImage]=useState('')
    const[image,setImage]=useState([])
    const[Dis,setDis]=useState('')
    const[imgLink,setImgLink]=useState('')
    const[Ur,setUr]=useState([])
    
    const [errorName,setErrorName] = useState('')
    var pickpoPreserver,pricePreserver,namePreserver,placePreserver

    pickpoPreserver=useRef('')
    pricePreserver=useRef('')
    namePreserver=useRef('')
    placePreserver=useRef('')

    

    var pickpo,price,name,place

    pickpo=pickpoPreserver.current.value
    price=pricePreserver.current.value
    name=namePreserver.current.value
    place=placePreserver.current.value


    var url=[],path=[],i=0,j=0,k=0,check

      // async function submitImage(){
      function submitImage(){
        return new Promise((resolve)=>{
      // let myPromise=new Promise(function(resolve){
        
        const data=new FormData()
         for (j in image) {
              //console.log(image[1]);

        data.append('file',image[j])
          // data.append('file',createImageBitmap)
        data.append('upload_preset','project')
        data.append('cloud_name','dxizvwfqg')

        getCats()
        async function getCats(){
          // fetch('https://api.cloudinary.com/v1_1/dxizvwfqg/image/upload',{
      var display=await fetch('https://api.cloudinary.com/v1_1/dxizvwfqg/image/upload',{
            method:'post',
            body:data
        })
         await display.json().then((data)=>{
          console.log(data.url)
          url.push(data.url)
         // console.log(url[1])
          // setUr([...Ur,data.url])
        //   console.log(Ur[1])
           // setImgLink(data.url)
           k=k+1
          if(k==(Dis.length))
         {
          resolve(url)
         }
         })
         
        }

       
        } 
        
      })  

     }

    const [formFields, setFormFields] = useState([
      // { pick: '', dayno: '',dest:'',fil:'',act:'' },
        //  {dayno:'',dest:'',fil:'',act:''}
        {dest:'',dayno:'',loc:'',fil:'',act:''}
    ])
 


    //var hello
    const handleFormChange = (event,index) => {
      let data = [...formFields]
      // console.log(index,event.target.name)  output=> 1 'name'
      data[index][event.target.name] = event.target.value;
      // data[event.target.name] = event.target.value;
      setFormFields(data);
      setDis(data)
     // setImage(event.target.files[0])
    //  place=data[index][dest]
    // check=index
    // // console.log(check)
    // if('dest'==event.target.name)
    // {
    //   check=check+1
    //    place=data[index][event.target.name]
    //   //  data[check][event.target.name]=event.target.value
    //   // console.log(data)
    //  console.log(place)
    // }

      setImage([...image,event.target.files[0]])
      
    }



  
  
  //  async function submit  (e)  {
    const submit=async e=>{
      e.preventDefault();
      console.log(formFields)
         await submitImage()
      console.log(imgLink)



           axios.post('/package',{pickpoint:pickpo,price:price,name:name,details:Dis,url:url}).then((res)=>{

      console.log(res.data+" successful")
            setErrorName('Value added ')

       navigate('/AgenMain')
  },(err)=>{
     setErrorName(err.response.data)
  })
 

    }
    


    const addFields = () =>{
      let data=[...formFields]
      let object={
        dest:'',
        dayno:'',
        loc:'',
        fil:'',
        act:''
      }
      setFormFields([...formFields, object])
      
    }
  
    const removeFields = (index) => {
      let data = [...formFields];
      data.splice(index, 1)
      setFormFields(data)
      
    }


    return(
        <>
    <div className={AddCSS.leader}>
    <section className={AddCSS.container}>
      <header className={AddCSS.header}>Add Package</header>

      {/* <form className={AddCSS.form} onSubmit={submit}> */}
      <form className={AddCSS.form} method='POST'>
      {/* <form className={AddCSS.form}> */}
        <div className={AddCSS.inputbox}>
          <label className={AddCSS.label}>Pick Up Point</label>
         
          <input className={AddCSS.inputf} type="text" placeholder="Enter Place name" onChange={
                    (e)=>{
                        pickpo=e.target.value  
                        setErrorName('')
                    }
          } ref={pickpoPreserver} />
          <label className={AddCSS.label}>Package Name</label>
         
         <input className={AddCSS.inputf} type="text" placeholder="Enter package name" onChange={
                   (e)=>{
                       name=e.target.value  
                       setErrorName('')
                   }
         } ref={namePreserver} />
          <label className={AddCSS.label}>Enter Price</label>
         
         <input className={AddCSS.inputf} type="text" placeholder="Enter price of the package" onChange={
                   (e)=>{
                       price=e.target.value  
                       setErrorName('')
                   }
         } ref={pricePreserver} />
        </div>

      {formFields.map((form,index)=>{
        return(
          <>
          <div className={AddCSS.rep} key={index}>
          <br/>
          <label className={AddCSS.label}>Enter Destination</label><br/>
          <input className={AddCSS.input} type="name" name='dest' placeholder="Enter Destination" onChange={event=>handleFormChange(event,index)} value={form.name} required />
{/* 
          {formFields.map((form,index)=>{;
            return(
              <> */}
              <div  key={index}>
              <label className={AddCSS.label}>Enter Day No.</label><br/>
              <input className={AddCSS.input} type="number" name='dayno' placeholder="Enter Day number" onChange={event=>handleFormChange(event,index)} value={form.name} required />

                <label className={AddCSS.label}>Enter Location</label><br/>
                <input className={AddCSS.input} type="name" name='loc' placeholder="Enter Location" onChange={event=>handleFormChange(event,index) } value={form.name} required />

                <label className={AddCSS.label}>Upload images of destination</label><br/>
              <input className={AddCSS.inpui} type="file" name="fil" onChange={event=>handleFormChange(event,index)} value={form.name}></input><br/><br/>
              


                <label className={AddCSS.label}>Describe activities</label><br/>
                <div id='activitySection'></div>
                <textarea className={AddCSS.input} placeholder="Enter Activity" name='act' onChange={event=>handleFormChange(event,index)} value={form.name}></textarea>

                

                <button className={AddCSS.button} onClick={addFields}>Add Day</button>
                {/* <button className={AddCSS.button} onClick={addFields}>Add Location</button> */}
                {/* <button className={AddCSS.button} onClick={()=>addFields(index)}>Add Location</button>
                index={index} */}
                
                <button className={AddCSS.button} onClick={()=>removeFields(index)}>Remove Destination</button>
                {/* index2={index2} */}
                <br/><br/>
                </div>
                
{/*                 
            </>
            )
          })} */}
            {/* <button className={AddCSS.button} onClick={()=>removeFields(index)}>Remove</button>
                  <br/><br/> */}
                  
                  <button className={AddCSS.button} onClick={addFields}>Add Destination</button>

                  {/* <button className={AddCSS.button} onClick={()=>removeFields(index)}>Remove Destination</button> */}
          </div>
            </>
        )
      })}
         <p style={{color:'red'}}>{errorName}</p>
        


        <br/>
        <button  onClick={submit} type='submit'>Submit</button>
        </form>
        <br/>
        {/* <button  onClick={submit}>Submit</button> */}
      
    </section>
    </div>
        </>
    )
}