import React,{useState,useEffect,useRef} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import {CustNavbar} from './components/Navbar'
//import ResultCSS from './Result.module.css'
import styled from "styled-components";



export function Result()
{
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        })

    },[])                                        
    const location=useLocation();
    var i,sel=[],j=0,data,temp,l,temp2,day=[],k=0,x
    //  const[value,setvalue]=useState('');
    // setvalue(location.state.details)
    data=location.state.details
    // console.log(location.state.details.length)
 
     console.log(data)

     for( j=0;j<location.state.details.length;j++)
     {
         for(l=0;l<location.state.details[j].det.length;l++)
         {

            if(location.state.destination==location.state.details[j].det[l].dest||location.state.destination==location.state.details[j].det[l].loc)
             {
             console.log(l)
             sel[k]=l
             k=k+1
             break;
             }
         }
     }


        for(j=0;j<location.state.details.length;j++)
        {
            x=location.state.details[j].det.length
            x=x-1

             day[j]=location.state.details[j].det[x].dayno
        }

     function getday(props)
     {

        return day[props]
       
     }
     function get(props)
     {
        console.log(sel[props])
        return sel[props]
     }
     i=0

    return(
        <>
        <CustNavbar/>
       
        <h2 style={{marginTop:'7rem',fontSize:"3rem",textAlign:'center',}}> RESULTS</h2>

        <br/><br/>
        <Container>
       
                <Main>
                    
       
        {data.map((elem,i)=>{
           
           temp=get(i)
           temp2=getday(i)
        return(
                     
                    <Card2 
                    name={elem.name}
                    image={elem.url[temp]}
                    price={elem.price}
                   title={elem.det[temp].dest}
                    days={temp2}
                    details={elem}
                    />
              
            )
              })} 
                </Main>
                </Container>    
        </>
    )
}

const Container = styled.div`
  margin-top:9rem;
  width: 100%;
//   background-color: rgb(234, 237, 237);

  max-width: 1400px
  margin: auto;
  height: fit-content
`;
const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 40px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
function Card2(props) {
  const navigate=useNavigate()
    return(
    <Container2 onClick={event=>navigate('/Dispack',{state:{details:props.details}})}>
    <Image>
      <img src={props.image} alt="" />
    </Image>
    <Description>
      <h2 style={{color:'rgb(25,25,112)'}}>{props.name}</h2>
      <h3>{props.title}</h3>
      {/* <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      /> */}
      <p>₹ {props.price}</p>
      <p>{props.days} days</p>

      {/* <button >Add to Cart</button> */}
    </Description>
  </Container2>
    );
}
const Container2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
//  background-color: #fff;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  z-index: 10;
  border-radius:2rem;
  margin-right:2vw;

`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 220px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.5;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;