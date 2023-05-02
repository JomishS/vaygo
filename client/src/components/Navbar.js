 import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            VAYGO
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Festivals'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                Festivals
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export function CustNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/CustMain' className='navbar-logo' onClick={closeMobileMenu}>
            VAYGO
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/CurrenCon'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                CURRENCY CONVERTOR
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/Customize'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                CUSTOMIZE
              </Link>
            </li>

          </ul>
          {button && <Button onClick={()=>{
            axios.get('/logout',{withCredentials:true}).then((res)=>{
                navigate('/login')
            },(err)=>{
                alert("Error in logout")
              })
        }} buttonStyle='btn--outline'>LOGOUT</Button>}

        </div>
      </nav>
    </>
  );
}


export function AgenNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/AgenMain' className='navbar-logo' onClick={closeMobileMenu}>
            VAYGO
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/Notifications'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                NOTIFICATIONS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AgenProf'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                PROFILE
              </Link>
            </li>

          </ul>
          {button && <Button onClick={()=>{
            axios.get('/logout',{withCredentials:true}).then((res)=>{
                navigate('/login')
            },(err)=>{
                alert("Error in logout")
            })
        }} buttonStyle='btn--outline'>LOGOUT</Button>}

        </div>
      </nav>
    </>
  );
}
