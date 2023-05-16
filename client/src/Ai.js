import React,{useEffect,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios';
import CGLogo from './chatGPT.png';
import AppLogo from './app-logo.png';
import AICSS from './Ai.module.css'

import { Navbar } from './components/Navbar';
export function Ai()
{
    const navigate=useNavigate()
    const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // communicate with API
    // post input value 'prompt' to API end point  
    axios.post("/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    
  };
    return(
        <>
        <body className={AICSS.body}>
            <div className={AICSS.wrapper}>
                <img src={AppLogo} alt="" className={AICSS.applogo} />	
                <form className={AICSS.form}onSubmit={handleSubmit}>
                    <img src={CGLogo} alt="" className={loading ? 'cglogo loading' : 'cglogo'} />
                    <input className={AICSS.input}
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask anything about trip itenaries and festivals... :)"
                    />
                    <button className={AICSS.button}type="submit">Ask</button>
                </form>
                <p className={AICSS.responsearea}>
                    {loading ? 'loading...' : response}
                </p>
                <div className={AICSS.footer}>~ VayGo ~</div>
            </div>
        </body>
        </>
    )
}
