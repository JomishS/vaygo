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



/*function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  )
}*/
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


         
        </Routes>
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  
);
// <Route exact path='/Customize' element={<Customize/>}/>
//ReactDOM.render(<App/>,document.getElementById('root'))

//<Route path='/' exact element={<Home/>} />
//<Route path='/sign-up' element={<SignUp/>} />