import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getSingleView } from '../service/allApi'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { bookingApi } from '../service/allApi';
import Header from '../components/Header';
import { BASE_URL } from '../service/baseUrl';






function SingleView() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //cardnte akath ninn varunna data store cheyyan state create cheyyunu
    const [singleViewInput, setSingleViewInput] = useState('')

    const { id } = useParams()

    const singleViewCard = async () => {
        const result = await getSingleView(id)
        console.log(result);
        setSingleViewInput(result.data)

    }

    useEffect(() => {
        singleViewCard()
    }, [])

    // console.log(singleViewInput);


    const[modelInput,setModelInput]=useState({
        rname:'',
        remail:'',
        rphno:'',
        checkIn:'',
        checkOut:''
    })

    const bookingDetails=(e)=>{
        const{name,value}=e.target
        setModelInput({...modelInput,[name]:value})
    }
    console.log(modelInput);

    const bookingbtn=async()=>{
        const{rname,remail,rphno,checkIn,checkOut}=modelInput
        if(rname=='' || remail=='' || rphno=='' || checkIn=='' || checkOut=='' ){
            alert('All inputs are required')
        }
        else{
            const result=await bookingApi({resortName:singleViewInput.addName,resortId:singleViewInput._id,rname,remail,rphno,checkIn,checkOut})

            if(result.status>=200  && result.status<300){
                alert(result.data)
            }
            else{
                alert('Not Available in This Date.Try Another Date')
            }
        }
    }


    


    return (
        <div>
                         <Header></Header>

        
        <div className='container-fluid bg-warning' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Row className='mt-5 mb-5' style={{ boxShadow:'5px 5px 5px 5px white',backgroundImage: 'linear-gradient(rgb(12, 13, 14), rgba(10, 11, 12, 0.455))', width: '70%', height: '60%', borderRadius: '0px 50px' }} >
                <Col md={6} lg={6} sm={6} className='p-0'  >
                    <img src= {`${BASE_URL}/packageimage/${singleViewInput.profile}`} style={{ width: '100%', height: '80vh', borderRadius: '0px 50px' }} className='ms-0'></img>
                </Col>
                <Col md={6} lg={6} sm={6} >



                    <div className='mt-5'>
                        <h1 style={{  fontFamily: 'Russo One, sans-serif' }} className='text-white'>{singleViewInput.addName}</h1>
                        <h5 style={{ fontFamily: 'monospace' }} className='text-white'><i class="fa-solid fa-location-dot text-secondary"></i> {singleViewInput.location}</h5>
                        <h3 style={{  fontFamily: 'Russo One, sans-serif' }} className='text-white'><i class="fa-solid fa-coins mt-4 text-warning"></i>Rs {singleViewInput.price} </h3>
                        {/* <h4 className='mt-4 text-success' style={{ fontFamily: 'monospace' }}><span className='text-white' style={{ fontFamily: 'monospace' }}>Status-</span> {singleViewInput.status}</h4> */}
                        <h5 className='mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe quia vel neque ut cumque obcaecati modi reprehenderit delectus magni iusto veritatis eligendi dignissimos dolores quidem pariatur incidunt, laborum molestias</h5>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{  fontFamily: 'Russo One, sans-serif' }} onClick={handleShow} variant="light" className='w-50 mb-3 mt-5' >Book Now</Button>{' '}

                            <Button style={{  fontFamily: 'Russo One, sans-serif' }} href='/'  variant="success" className='w-25 mb-3 mt-5 ms-4' >Back</Button>{' '}

                        </div>

                    </div>

                </Col>


            </Row>

            <div>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton  style={{}} className='bg-warning'>
                        <Modal.Title style={{  fontFamily: 'Russo One, sans-serif' }}>Book Your Resort</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>



                        <InputGroup className="mb-3">
                            {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name='rname'
                                onChange={(e)=>bookingDetails(e)}
                               
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email Id"
                                aria-label="Email Id"
                                aria-describedby="basic-addon2"
                                name='remail'
                                onChange={(e)=>bookingDetails(e)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                                aria-describedby="basic-addon2"
                                name='rphno'
                                onChange={(e)=>bookingDetails(e)}
                            />
                        </InputGroup>



                        <FloatingLabel
                            controlId="floatingInput"
                            label="Check In"
                            className="mb-3 w-100 "
                            type='text'

                        >
                            <Form.Control type="Date" placeholder="" name='checkIn'  onChange={(e)=>bookingDetails(e)} />

                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingInput"
                            label="Check Out"
                            className="mb-3 w-100 "
                            type='text'
                        >
                            <Form.Control type="Date" placeholder="" name='checkOut'  onChange={(e)=>bookingDetails(e)} />

                        </FloatingLabel>









                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='bg-warning' onClick={bookingbtn}>Book Now</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
        
        </div>
    )
}

export default SingleView