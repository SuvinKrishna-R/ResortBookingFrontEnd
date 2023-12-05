import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpForm.css'
import { userRegisterApi } from '../service/allApi'

function SignUpForm() {


    const[unameValid,setUnameValid]=useState(true)

    const[emailValid,setEmailValid]=useState(true)

    const[pswValid,setPswValid]=useState(true)

    const[cpswValid,setCpswValid]=useState(true)

    const navigate=useNavigate()

    const[registerInput,setRegisterInput]=useState({
        uname:'',
        email:'',
        psw:'',
        cpsw:''
    })

    const setInput=(e)=>{
        const{value,name}=e.target
        if(name=="uname"){
            if(value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
                setUnameValid(true)
                setRegisterInput({...registerInput,[name]:value})
            }
            else{
                setUnameValid(false)
            }
        }

        if(name=="email"){
            if(value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
                setEmailValid(true)
                setRegisterInput({...registerInput,[name]:value})
            }
            else{setEmailValid(false)}
        }

        // psw
        if(name=="psw"){
            if(value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
                setPswValid(true)
                setRegisterInput({...registerInput,[name]:value})
            }
            else{
                setPswValid(false)

            }
        }

        //cpsw
        if(name=='cpsw'){
            if(value.match(registerInput.psw)){
                setCpswValid(true)

            }
            else{
                setCpswValid(false)
            }
        }
    }

    // console.log(registerInput);


    const handleRegister=async()=>{
        const {uname,email,psw}=registerInput

        if(uname=='' || email=='' || psw=='' ){

            alert('All inputs are required')
        }
        else{
            const result=await userRegisterApi(registerInput)

                if(result.status>=200 && result.status<300){
                    alert(result.data)
                    navigate('/')
                    
                }
                else{
                    alert(result.response.data)
                }
            
        }

    }




  return (
  
        <div style={{height:'100vh',width:'100%'}} className='text-white'>
            <Container style={{ display: 'flex', justifyContent: 'center' }} >
                <Row  className='bg-warning'  style={{ display: 'flex', justifyContent: 'center', marginTop: '10vh', width: '50%' }} >

                   <Col md={6} lg={6} sm={12} className='ms-0 p-0 '>
                    <img style={{height:'100%', width:'100%'}} className='mt-0 ms-0' src="https://i.postimg.cc/dtLYbtCX/19-of-the-most-incredible-hotels.gif" alt="" />
                   </Col>
                   <Col md={6} lg={6} sm={12} className=''>
                   
                    <div className='ms-1 '>
                    <h1 className='mt-4'><center>Register</center></h1>


                    <div class="form-group w-100 px-3">
                        <label class="form-label mt-4">Username</label>
                        <input onChange={(e)=>setInput(e)} type="text" class="form-control" placeholder="Enter Username" name='uname' />
                    </div>
                    { !unameValid &&
                            <div>
                                <p className='text-danger'>Invalid Format  !</p>
                            </div>
                            }
                    

                   

                    <div class="form-group w-100 px-3">
                        <label class="form-label mt-4">Email id</label>
                        <input onChange={(e)=>setInput(e)} type="email" class="form-control" placeholder="Enter Email id" name='email'  />
                    </div>
                    { !emailValid &&
                            <div>
                                <p className='text-danger'>Invalid Email Format  !</p>
                            </div>
                            }
                    


                    <div class="form-group  w-100 px-3">
                        <label class="form-label mt-4">Password</label>
                        <input onChange={(e)=>setInput(e)} type="password" class="form-control" placeholder="Password" autocomplete="off" name='psw' />
                    </div>
                    {!pswValid &&
                     <div>
                     <p className='text-danger'>Invalid Password Format  !</p>
                     </div>
                    }
                    

                    <div class="form-group mb-5 w-100 px-3">
                        <label class="form-label mt-4">Confirm Password</label>
                        <input onChange={(e)=>setInput(e)}  type="password" class="form-control" placeholder="Password" autocomplete="off" name='cpsw' />
                    </div>
                    {!cpswValid &&
                     <div>
                     <p className='text-danger'>Incorrect Password  !</p>
                     </div>
                    }

                    <div className='w-75 px-3'>
                        <Row>
                            <Col>
                                <button onClick={handleRegister} type="submit" class="btn  mb-3  " style={{ backgroundColor: 'rgb(101,68,119)' }}>Submit</button>
                            </Col>

                            <Col className='' style={{ marginLeft: '0%' }}>
                                <div style={{ height: '100%', width: '100%' }}>
                                    <Link to='/login' style={{ color: 'black', textDecoration: 'none' }}>Already Registered..</Link>

                                </div>
                            </Col>


                            
                        </Row>



                    </div>
                    </div>

                    </Col>
                </Row>


            </Container>
        </div>
    )
}



export default SignUpForm