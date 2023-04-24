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
    var pickpoPreserver,destPreserver,dayPreserver

    pickpoPreserver=useRef('')

    

    var dest=[],day=[],pickpo

    pickpo=pickpoPreserver.current.value


    var url=[],path=[],i=0,j=0,k=0

      // async function submitImage(){
      function submitImage(){
        return new Promise((resolve)=>{
      // let myPromise=new Promise(function(resolve){
        
        const data=new FormData()
         for (j in image) {
              // console.log(image[1]);

        data.append('file',image[j])
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
           setUr([...Ur,data.url])
        //   console.log(Ur[1])
            setImgLink(data.url)
           k=k+1
          if(k==(Dis.length))
         {
          resolve(url)
         }
         })
         
        }
       
          // console.log(display)
          // display.then((res)=>res.json())
          // display.then((data)=>{
          //   console.log(data)
          // })
        // response.json().then(function(response){
        //   console.log(response.data.url)
        // })
      //   //response.json()
      //   .then((res)=>res.json())
      // .then((data)=>{
      //     //resolve(data)
      //         url.push(data.url)
      //     console.log(url[0])
      // //   })
        // .then((res)=>res.json())        
        // .then((data)=>{
        //      console.log(data)
        //    // console.log(data.url)
        //     url.push(data.url)
        //   console.log(url[1])
        //    setUr([...Ur,data.url])
        // //   console.log(Ur[1])
        //     setImgLink(data.url)
        //     console.log(Dis.length-1)
        //     if(j==(Dis.length-1))
        //     {

        //     resolve(data)
        //     }
        //     //resolve(url[j])
            
        // }).catch((err)=>{
        //     console.log(err)
        // })  

      
      //   console.log(data)
       
        } 
        
      })  
    // await myPromise
  // console.log(Ur[1]) 
     }

    const [formFields, setFormFields] = useState([
      // { pick: '', dayno: '',dest:'',fil:'',act:'' },
         {dayno:'',dest:'',fil:'',act:''}
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
     //
      setImage([...image,event.target.files[0]])
      //submitImage()

      //console.log(data[index].fil)
     // setImage(event=>[(event.target.files[0])
     // setImage(data[index].fil)      
    }

    // const handleFormChangef = (event, index) => {
    //   let data2 = [...formFields];
    //   // console.log(index,event.target.name)  output=> 1 'name'
    //   data2[index][event.target.name] = event.target.value;
    //   setFormFields(data2);
    //   setDis(data2)
    //  // setImage(event.target.files[0])
    //  setImage([...image,event.target.files[0]])
    //  submitImage()
    // }
  
  
  //  async function submit  (e)  {
    const submit=async e=>{
      e.preventDefault();
      console.log(formFields)
       await submitImage()
      console.log(imgLink)


    //   const myTimeout=setTimeout(hello,8000)
    //   hello()
    //  function hello(){
        
       // console.log(url[0])

           axios.post('/package',{pickpoint:pickpo,details:Dis,url:url}).then((res)=>{

      console.log(res.data+" successful")
            setErrorName('Value added ')

       navigate('/AgenMain')
  },(err)=>{
     setErrorName(err.response.data)
  })
 
//}

//clearTimeout(myTimeout)

    }

    const addFields = () =>{
      let object={
        dayno:'',
        dest:'',
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
        </div>
      {formFields.map((form,index)=>{
        return(
          <>
          <div className={AddCSS.rep} key={index}>
          <br/>
          <label className={AddCSS.label}>Enter Day No.</label><br/>
          <input className={AddCSS.input} type="number" name='dayno' placeholder="Enter Day number" onChange={event=>handleFormChange(event,index)} value={form.name} required />

            <label className={AddCSS.label}>Enter Destination</label><br/>
            <input className={AddCSS.input} type="name" name='dest' placeholder="Enter Place name" onChange={event=>handleFormChange(event,index) } value={form.dest} required />

            <label className={AddCSS.label}>Upload images of destination</label><br/>
           <input className={AddCSS.inpui} type="file" name="fil" onChange={event=>handleFormChange(event,index)} value={form.name}></input><br/><br/>
           


            <label className={AddCSS.label}>Describe activities</label><br/>
            <div id='activitySection'></div>
            <textarea className={AddCSS.input} placeholder="Enter Activity" name='act' onChange={event=>handleFormChange(event,index)} value={form.act}></textarea>

            <button className={AddCSS.button} onClick={addFields}>Add Destination</button>


            <button className={AddCSS.button} onClick={addFields}>Add Day</button>
            <button className={AddCSS.button} onClick={()=>removeFields(index)}>Remove</button>
            
            </div>
            
            </>
        )
      })}
         <p style={{color:'red'}}>{errorName}</p>
        


         {/* <button onClick={()=>{
         submit()
         console.log(pickpo)
          console.log(Dis.length)
            if(!pickpo)
            {
                alert("Please complete the details")
            }
            else{
                //console.log(pickpo+' '+dest+' '+pickdate+' '+picktime+' '+preho+' '+fotyp+' '+adult+' '+chil+' '+inf+' '+redate+' '+chetime+' '+name+' '+num+' '+email+' ' +add+' ')
                 axios.post('/package',{pickpoint:pickpo}).then((res)=>{
                     console.log(res.data+" successful")
                     setErrorName('Value added')
                    // for(k in Dis.length)
                    // {
                    //   axios.post('/package',{dayno:Dis[k].dayno,destination:Dis[k].dest,image:Dis[k].fil,activity:Dis[k].act}).then((res1)=>{
                    //     console.log(res1.data+'successful in inner details')
                    //     setErrorName('Value added')
                    //   })
                    // }
                     //navigate('/CustMain')
                    //  setTimeout(()=>{
                    //      navigate('/CustMain')
                    //  },2000)
                      navigate('/AgenMain')
                 },(err)=>{
                    setErrorName(err.response.data)
                 })
            }
        }} type='submit' >Submit</button>  */}
         {/* }}>Submit</button> */}
                {/* <button type="reset" className={CustomizeCSS.reset}>CLEAR </button> */}
                
        {/* </form> */}
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