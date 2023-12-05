import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link,  useNavigate } from 'react-router-dom'
import './LogInForm.css'
import { userLoginApi,adminLoginApi} from '../service/allApi'
import { useContext } from 'react';
import { HeaderAdminUpdateContext } from '../components/HeaderHideContext';



function Login() {
    const {updateHeader,setUpdateHeader}=useContext(HeaderAdminUpdateContext)

    const [unameLoginValid, setUnameLoginValid] = useState(true)

    const [pswLoginValid, setPswLoginValid] = useState(true)

    const [loginInput, setLoginInput] = useState({
        'uname': '',
        'psw': ''

    })

    const Navigate=useNavigate()

    const setInputs = (e) => {
        const { name, value } = e.target
        if (name == "uname") {
            if (value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)) {
                setUnameLoginValid(true)
                setLoginInput({ ...loginInput, [name]: value })
            }
            else {
                setUnameLoginValid(false)

            }
        }

        if (name == 'psw') {
            if (value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
                setPswLoginValid(true)
                setLoginInput({ ...loginInput, [name]: value })
            }
            else {
                setPswLoginValid(false)
            }
        }

        // console.log(loginInput);


       

    }


    const handleLogin=async()=>{
        const {uname,psw}=loginInput

        if(uname=='' || psw==""){
            alert('All datas are required')
        }
        else{
            if(uname=="admin"){
                const result=await adminLoginApi({adminName:uname,adminPsw:psw})
                console.log(result.data);
                if(result.status>=200 && result.status<300){
                    localStorage.setItem('aId',result.data.aId)
                    setUpdateHeader(true)
                    Navigate('/')
                }
                else{
                    alert('not found')
                }
            }else{
                const result=await userLoginApi(loginInput)

            if(result.status>=200 && result.status<300){
                localStorage.setItem('uId',result.data.uid)
                setUpdateHeader(true)
                Navigate('/')
            }
            else{
                alert('not found')
            }
            }
            

        }

    }
    console.log(loginInput);
    return (
        <div style={{ height: '100vh', width: '100%' }} className='text-white'>
            <Container style={{ display: 'flex', justifyContent: 'center' }} >
                <Row id='id1'  style={{
                    display: 'flex', justifyContent: 'center'
                    , marginTop: '15vh', width: '50%', borderRadius: '20px'
                }} >
                   



                    <Col md={6} lg={6} sm={12} className='px-5  bg-warning'>
                    <h1><center>LOG IN</center></h1>
                        <div class="form-group w-100 ">
                            <label class="form-label mt-4">Username</label>
                            <input onChange={(e) => setInputs(e)} type="text" class="form-control" placeholder="Enter Username" name='uname' />
                        </div>
                        {!unameLoginValid &&

                            <div>
                                <p className='text-danger'>Invalid username Format  !</p>
                            </div>

                        }




                        <div class="form-group mb-5 w-100">
                            <label class="form-label mt-4">Password</label>
                            <input onChange={(e) => setInputs(e)} type="password" class="form-control" placeholder="Password" autocomplete="off" name='psw' />
                        </div>
                        {!pswLoginValid &&

                            <div>
                                <p className='text-danger'>Invalid Password Format  !</p>
                            </div>

                        }



                        <div className='w-100'>
                            <Row>
                                <Col md={6} lg={6} sm={12} style={{ height: '100%' }} >
                                    <Button onClick={handleLogin} type="button" class="btn   mb-3" style={{ backgroundColor: 'rgb(101,68,119)' }}>Submit</Button>
                                </Col>

                                <Col md={6} lg={6} sm={12} className='mb-3' style={{ marginLeft: '1%', height: '100%' }}>
                                    <div style={{ height: '100%', width: '25%' }}>
                                        forgot password?
                                    </div>
                                </Col>
                            </Row>


                            <div className='mb-3' style={{ height: '100%', width: '100%' }}>
                                <span>New User?</span>
                                <Link to='/signup' style={{ color: 'black', textDecoration: 'none' }} ><b>Register</b> </Link>

                            </div>





                        </div>

                    </Col>
                    <Col md={6} lg={6} sm={12} className=' bg-warning p-0'>
                        <img style={{ height: '100%', width: '100%' }} className='ms-0 ' src="https://i.postimg.cc/dtLYbtCX/19-of-the-most-incredible-hotels.gif" alt="" />
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Login