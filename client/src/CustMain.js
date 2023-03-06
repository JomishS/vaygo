import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {CustNavbar} from './components/Navbar'
import CustMainCSS from './CustMain.module.css'


export function CustMain()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])

    return(
        <>
        <CustNavbar/>

        <div className={CustMainCSS.banner}>
            <div className={CustMainCSS.bannertextitem}>
                <div className={CustMainCSS.bannerheading}>
                    <h1>Find your Next tour!</h1>
                </div>
                <form className={CustMainCSS.form}>
                    <input type="text" list="mylist" placeholder="Where would you like to go?"/>
                    <datalist id="mylist">
                        <option>London</option>
                        <option>Canada</option>
                        <option>Monaco</option>
                        <option>France</option>
                        <option>Japan</option>
                        <option>Switzerland</option>
                        <option>Seoul</option>
                    </datalist>
                    <input type="date" className={CustMainCSS.date}/>
                    <a href="#" class={CustMainCSS.book}>book</a>
                </form>
            </div>
        </div>

    <div className={CustMainCSS.cards}>
      <h1>FAVOURITE DESTINATIONS</h1>
      <div className={CustMainCSS.cardscontainer}>
        <div className={CustMainCSS.cardswrapper}>
          <ul className={CustMainCSS.cardsitems}>
            <Card
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Jungle'
              label='Adventure'
              path='/services'
            />
            <Card
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          
            <Card
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            </ul>
            <ul className='cards__items'>
            <Card
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Card
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
    )
}

function Card(props) {
    return (
      <>
        <li className={CustMainCSS.ardsitem}>
          <Link className={CustMainCSS.cardsitemlink} to={props.path}>
            <figure className={CustMainCSS.cardsitempicwrap} data-category={props.label}>
              <img
                className={CustMainCSS.cardsitemimg}
                alt='Travel Image'
                src={props.src}
              />
            </figure>
            <div className={CustMainCSS.cardsiteminfo}>
              <h5 className={CustMainCSS.cardsitemtext}>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }