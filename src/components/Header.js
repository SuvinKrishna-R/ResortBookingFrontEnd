import React,{useEffect, useState} from 'react';
import "./Header.css";
import { useContext } from 'react';
import { HeaderAdminUpdateContext } from './HeaderHideContext';


function Header() {

  const {updateHeader,setUpdateHeader}=useContext(HeaderAdminUpdateContext)

  const [userLogin,setUserLogin]=useState(false)
  const [adminLogin,setAdminLogin]=useState(false)
  
  const loginData=()=>{
    if(localStorage.getItem('uId')){
      setUserLogin(true)
    }else if(localStorage.getItem('aId')){
      setAdminLogin(true)
    }
    
  }
  const logout=()=>{
    setUserLogin(false)
    setAdminLogin(false)
    setUpdateHeader(false)
    localStorage.clear()
  }

  useEffect(()=>{
    loginData()
  },[userLogin,adminLogin,updateHeader])

  return (
    <div className='p-3 bg-warning' style={{backgroundColor:'rgb(349,341,25)'}}>
        <nav class="navbar navbar-expand-lg bg-light   " style={{height:'15vh',borderRadius:'40px'  }}>
  <div class="container ">
    <a class="navbar-brand fs-3" style={{width:'60%',fontFamily: 'Russo One, sans-serif'}} href="#" id='webName'>Astoria Current</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li id='resort1' class="nav-item bg-warning" style={{borderRadius:'10px'}}>
          <a class="nav-link " aria-current="page" href="#resorts" style={{fontFamily: 'monospace'}}>Resorts</a>
        </li>
        <li id='aboutus1' class="nav-item ms-1 bg-warning" style={{borderRadius:'10px'}}>
          <a class="nav-link" href="#about us" style={{fontFamily: 'monospace'}}>AboutUs</a>
        </li>
        {adminLogin&&
              <li id='AddResorts1' class="nav-item ms-1 bg-warning " style={{borderRadius:'10px'}}>
                <a class="nav-link" href="/add" style={{fontFamily: 'monospace'}}>AddResorts</a>
              </li>
        }
        {adminLogin&&
            <li id='AllBooking' class="nav-item ms-1 bg-warning" style={{borderRadius:'10px'}}>
                <a class="nav-link" href="/enquiry" style={{fontFamily: 'monospace'}}>AllBooking</a>
              </li>
        }
        {(userLogin||adminLogin)&&<li class="nav-item ms-1" id='logout'>
          <a class="nav-link bg-black text-white" onClick={logout}  href='/login'  style={{borderRadius:'10px',fontFamily: 'Russo One, sans-serif'}}>LogOut</a>
        </li>
        }
        {(!userLogin&&!adminLogin)&&<li class="nav-item ms-1" id='login'>
          <a class="nav-link bg-black text-white" href="/login" style={{borderRadius:'10px',fontFamily: 'Russo One, sans-serif'}}  >LogIn</a>
        </li>
        }
        
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header