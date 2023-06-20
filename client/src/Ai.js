import React,{useEffect,useState,useRef} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios';
 import Load from './loader.gif';
import Send from './send.png';
import AICSS from './Ai.module.css'
import {useMutation} from 'react-query'

import { Navbar } from './components/Navbar';
export function Ai()
{

  const [chat,setChat]=useState([])
  const mutation=useMutation({
    mutationFn:()=>{
      return fetchResponse(chat)
    },
    onSuccess:(data)=>setChat((prev)=>[...prev,{sender:'ai',message:data.message.replace(/^\n\n/, '')}])
  })

  const sendMessage= async(message)=>{
    await Promise.resolve(setChat((prev)=>[...prev,message]))
    mutation.mutate()
  }
    return(
        <>
          <div className={AICSS.main}>

            {/* gradients */}
            <div className={AICSS.gradients}/>
            <div className={AICSS.gradients2}/>

            {/*header*/}
            <div className={AICSS.header}>VAYGO</div>

            {/* body */}
            <div className={AICSS.bodyout}>

             <Chatbody chat={chat}/>
             
            </div>

            {/* input */}
            <div className={AICSS.inout}>
              <ChatInput sendMessage={sendMessage} loading={mutation.isLoading}/>
            </div>
          </div>
        </>
    )
}

const Chatbody=({chat})=>{

  const bottomRef=useRef(null)

 //for scrolling bottom
 useEffect(()=>{
  bottomRef.current?.scrollIntoView({behavior:'smooth'})
 },[chat])
  return(
    <>
    <div className={AICSS.body}>

      {chat.map((message,i)=>{
          
          return(
            <>
              {/* client message */}
              {/* <div key={i} className={`AICSS.client} ${message.sender==='ai'&& `{AICSS.aimsg}`}`}> */}
              <div key={i} className={AICSS.client}>
                <pre className={AICSS.clientpre}>
                  <span>{message.message}</span>
                </pre>
              </div>
            </>
          )
       })}

      <div ref={bottomRef}/>
      {/* ai message */}
      {/* <div className={AICSS.aimsg}>
        <pre>
          <span>I can help you</span>
        </pre>
      </div> */}
      </div>
  </>
  )

}

const ChatInput=({sendMessage,loading})=>{

  const [value,setValue]=useState('')
  
  const handleSubmit=()=>{
    if(value==='') return;
    sendMessage({sender:'user',message:value})
    setValue('')
  }

  return(
    <>
      <div className={AICSS.chatp}>

        {loading? (
        <img src={Load} className={AICSS.load}/>
        ):
        <>
        <textarea className={AICSS.text}
        onKeyDown={(e)=>{
          e.keyCode===13 && e.shiftKey===false && handleSubmit()
        }}
        rows={1}
        value={value}
        type='text'
        onChange={(e)=>setValue(e.target.value)}/> 
        
         <img onClick={handleSubmit} src={Send} width={25} alt='send-button' className={AICSS.img}/>
         </>
      }
        
      </div>
 
    </>
  ) 
}

const fetchResponse=async(chat)=>{
  try{
      const response=await fetch('http://localhost:5000/chat',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          message:chat.map((message)=>message.message).join('\n')   
          })
      })
      const data=await response.json()
      return data
  }
  catch(error){
    console.log(error)
  }

}