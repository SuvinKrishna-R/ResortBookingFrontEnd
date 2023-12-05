import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import { searchBarApi } from '../service/allApi';
import { BASE_URL } from '../service/baseUrl';
import { useNavigate } from 'react-router-dom';
import aos from 'aos';
import 'aos/dist/aos.css'





function Home() {


    const navigate = useNavigate()

    // state to hold all package details
    //also searchbar

    const [packageDetails, setPackageDetails] = useState([])
    const [searchdata, setSearchdata] = useState('')

    const getAllPackageDetails = async () => {
        const { data } = await searchBarApi(searchdata)
        console.log(data);
        setPackageDetails(data)
    }
    console.log(packageDetails);

    useEffect(() => {
        getAllPackageDetails()
    }, [searchdata])


    // useEffect for Aos
    useEffect(()=>{
        aos.init()
    },[])


    //single card
    const singleData = (id) => {
        navigate(`/single/${id}`)
    }


    return (
        
        <div style={{ height: '100%', width: '100%' }} className='mb-0  mt-0 bg-warning'>
            <Header></Header>

            <Carousel className='mb-4 container pt-4'>
                <Carousel.Item style={{ height: '70vh', width: '100%' }}>
                    <Image src='https://i.postimg.cc/K80ShhqM/3e9ec56a2986154d253e95b50008f3fb.jpg' style={{ height: '100%', width: "100%" }} />
                    <Carousel.Caption >
                        <h1 id='carouselCaptions' className='text-warning' style={{ fontFamily: 'Russo One' }}>Your <span className='text-white'> Perfect</span> Holiday Home</h1>
                        <p style={{ fontFamily: 'Londrina Solid ,serif' }} className='text-black fs-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '70vh', width: '100%' }}>
                    <Image src="https://i.postimg.cc/15P39PHC/e613a876973540c552bc7ad391dad93fc-f3695407488od-w480-h360.jpg" alt="" style={{ height: '100%', width: "100%" }} />
                    <Carousel.Caption>
                        <h1 id='carouselCaptions' className='text-warning' style={{ fontFamily: 'Russo One' }}>Home <span className='text-white'>Away </span>From Home</h1>
                        <p style={{ fontFamily: 'Londrina Solid ,serif' }} className='text-black fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '70vh', width: '100%' }}>
                    <Image src="https://i.postimg.cc/pTzkJK3B/entrancebanasura-1428041013m.jpg" alt="" style={{ height: '100%', width: "100%" }} />
                    <Carousel.Caption>
                        <h1 id='carouselCaptions' className='text-warning' style={{ fontFamily: 'Russo One' }}>Live in the <span className='text-white'>sunshine</span>
                        </h1>
                        <p style={{ fontFamily: 'Londrina Solid ,serif' }} className='text-black fs-4'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>





            {/* -----------resorts--------------- */}

            <section id='resorts' style={{
                backgroundImage: ' linear-gradient(rgba(0, 0, 0, 0.76), rgba(11, 10, 5, 0.426)), url("https://i.postimg.cc/8zJnkbJJ/hammocks-with-palm-trees.jpg")'
                , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >

                <Row style={{ height: '100%', width: '100%' }}>

                    <h2 style={{ fontFamily: 'Russo One, sans-serif' }} className='text-warning text-center m-5'>Resorts</h2>

                    <Row style={{ minHeight: '20vh', width: '100%' }} className='d-flex justify-content-center align-items-center  ' >
                        <Col md={9} lg={6} sm={6}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Search Here"
                                className="mb-3 w-100  ms-3"
                                type='text'

                            >
                                <Form.Control id='searchbar1' style={{ borderColor: 'black', borderRadius: '10px', boxShadow: '1px 1px 1px 1px rgb(349,341,25)' }} onChange={(e) => setSearchdata(e.target.value)} type="text" placeholder="Search Here" />

                            </FloatingLabel>
                        </Col>


                        {/* <Col md={1} lg={2} sm={6}>
                            <Button className='ms-3' variant="warning" style={{ minHeight: '57px', marginBottom: '15px', width: '100%' }}>Check</Button>

                        </Col> */}





                    </Row>

                    <Col md={3} lg={3} sm={6} style={{ height: '100%', width: '100%', display: "flex", justifyContent: 'center', flexDirection: 'Row', flexWrap: 'wrap' }} >
                        {
                           packageDetails && packageDetails.length > 0 ? packageDetails.map(i => (
                                <Card data-aos="fade-down" id='cards1' style={{ width: '18rem', boxShadow: '2px 2px 2px 2px black' }} className='ms-4 mt-5 mb-4'>
                                    <Card.Img variant="top" src={`${BASE_URL}/packageimage/${i.profile}`} style={{ height: '250px', width: '100%' }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Russo One, sans-serif' }}>{i.addName}</Card.Title>
                                        <Card.Text style={{ fontFamily: 'monospace' }}>LOCATION-{i.location}</Card.Text>
                                        <Card.Text style={{ fontFamily: 'monospace' }}>PRICE-{i.price}RS</Card.Text>
                                        {/* <Card.Text>Room Type-{i.roomType}</Card.Text> */}


                                        <Button onClick={() => singleData(i._id)} variant="primary" className='w-75 bg-warning'>View More</Button>
                                    </Card.Body>
                                </Card>
                            )) : <h3 className='mb-3 mt-3 text-white'> No Resorts Found</h3>

                        }
                    </Col>
                </Row>
            </section>


            {/*---------- about us -------------*/}

            <section className='bg-white container ' style={{height:'100%',width:'100%'}} id='about us'>
               
                    <Row  className='bg-warning '>

                        <Col md={6} lg={6} sm={6} className='bg-white'>
                            <img  style={{width:'100%'}} src="https://i.postimg.cc/kXktNYjJ/43p58-PICca-Qcc-Vbh8cc5g-PIC2018.png" alt="" />
                        </Col>
                        <Col md={6} lg={6} sm={6}  className=''>
                        <h2 style={{ fontFamily: 'Russo One, sans-serif' }} className='bg-warning text-white  text-center m-5'>About Us</h2>

                        <p className='m-5'>
                            "Welcome to Austoria Curren, where azure waters meet powder-soft sands, and every sunrise brings the promise of a new adventure. Nestled amidst lush palm trees and surrounded by breathtaking vistas, our resort beckons travelers seeking luxury and serenity. Immerse yourself in unparalleled comfort as our world-class amenities cater to your every need. Whether indulging in gourmet dining experiences, unwinding at our rejuvenating spa, or exploring thrilling water sports, your escape to our haven is designed to exceed expectations and create cherished memories that linger long after your departure."
                        </p>
                        </Col>
                        
                    </Row>


             
            </section>

        </div>


    )
}

export default Home