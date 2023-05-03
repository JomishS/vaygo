import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
/*import {Test} from './Test.js'*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
/*import {Demo} from './Sample1'*/
import {Login,Register} from './loginRegister'
import {CustMain} from './CustMain'
import {AgenMain} from './AgenMain'
import {AgenProf} from './AgenProf'
import { Customize } from './Customize';
import { Notification } from './Notification';
import { CurrenCon } from './CurrenCon';
import { AddPack } from './AddPack';
import Sample from './Sample'
import { Delete} from './Delete';
import {Result} from './Result'
import { Festivals } from './Festivals';
import { Kerala } from './Kerala';
import { Dispack } from './Dispack';
import { TamilNadu } from './TamilNadu';
import { Karnataka } from './Karnataka';
import { Himachal } from './Himachal';
import { Rajastan } from './Rajastan';



function App(){
  
  return(
    <>
      <Router>
        <Routes>
        <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route exact path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/CustMain' element={<CustMain/>}/>
          <Route exact path='/AgenMain' element={<AgenMain/>}/>
          <Route exact path='/AgenProf' element={<AgenProf/>}/>
          <Route exact path='/Customize' element={<Customize/>}/>
          <Route exact path='/Notification' element={<Notification/>}/>
          <Route exact path='/CurrenCon' element={<CurrenCon/>}/>
          <Route exact path='/AddPack' element={<AddPack/>}/>
          <Route exact path='/Sample' element={<Sample/>}/>
          <Route exact path='/Delete' element={<Delete/>}/>
          <Route exact path='/Result' element={<Result/>}/>
          <Route exact path='/Festivals' element={<Festivals/>}/>
          <Route exact path='/Kerala' element={<Kerala/>}/>
          <Route exact path='/Dispack' element={<Dispack/>}/>
          <Route exact path='/TamilNadu' element={<TamilNadu/>}/>
          <Route exact path='/Karnataka' element={<Karnataka/>}/>
          <Route exact path='/Himachal' element={<Himachal/>}/>
          <Route exact path='/Rajastan' element={<Rajastan/>}/>



         
        </Routes>
      </Router>
      
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  
);
