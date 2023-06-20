import React,{useEffect,useState,useRef} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import styled from "styled-components";

export async function ViewPack()
{
    const navigate=useNavigate()
    var res
    const [Res,setRes] = useState('')


    useEffect(()=>{
        
        axios.get('/isEligibleWithSession',{withCredentials:true}).then((res)=>{
            console.log("User eligible for this page since session is present")
        },(err)=>{
            navigate('/login')
        }) 
        axios.get('/getpack')
        .then((res)=>{
            console.log('the pack details are')
            res=res.data
            setRes(res.data)
             console.log(res[0].name)
        },(err)=>{
            console.log('error in getting package')
        })
         
        
    },[])


    
    // const location=useLocation();
    var i,sel=[],j=0,data,temp,l,temp2,day=[],k=0,x
    //  const[value,setvalue]=useState('');
    // setvalue(location.state.details)
    // data=location.state.details

    //  console.log(Res)
    // console.log(res)


    // for( j=0;j<res.length;j++)
    // {
    //     for(l=0;l<res[j].det.length;l++)
    //     {

    //        if(res.destination==location.state.details[j].det[l].dest||location.state.destination==location.state.details[j].det[l].loc)
    //         {
    //         console.log(l)
    //         sel[k]=l
    //         k=k+1
    //         break;
    //         }
    //     }
    // }


    //    for(j=0;j<res.length;j++)
    //    {
    //        x=res[j].det.length
    //        x=x-1

    //         day[j]=res[j].det[x].dayno
    //    }

    // function getday(props)
    // {

    //    return day[props]
      
    // }
    // // function get(props)
    // // {
    // //    console.log(sel[props])
    // //    return sel[props]
    // // }
    // i=0

    return(
        <>
        {/* <h1>{res[0].name}</h1> */}
       
       {/* <h2 style={{marginTop:'7rem',fontSize:"3rem",textAlign:'center',}}> RESULTS</h2>

       <br/><br/>
       <Container>
      
               <Main>
                   
      
       {res.map((elem,i)=>{
          
        //   temp=get(i)
          temp2=getday(i)
       return(
                    
                   <Card2 
                   name={elem.name}
                   image={elem.url[temp]}
                   price={elem.price}
                //   title={elem.det[temp].dest}
                   days={temp2}
                   details={elem}
                   />
             
           )
             })} 
               </Main>
               </Container>     */}
        </>
    )
}