import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AddPackageApi } from '../service/allApi';
import Header from '../components/Header';



function Add() {
    //state for store image
    const [image, setImage] = useState("")

    //state for store packages
    const [addPackage, setAddPackage] = useState({
        addName: '',
        location: '',
        price: ''


    })

    const addInput = (e) => {
        const { name, value } = e.target

        setAddPackage({ ...addPackage, [name]: value })

    }

    const chooseImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleData = async (e) => {
        //refresh avoid cheyyan
        e.preventDefault();
        const { addName, location, price } = addPackage;
        if (
            addName == "" ||
            location == "" ||
            price == "" 


        ) {
            alert("All fields are required");
        } else {
            //setting header
            const headerConfig = {
                "Content-Type": "multipart/form-data",
            };

            //file type content sent chyumpo nammal form data typil aayirikanm body akath send cheyunnath
            //for that formtype body object create cheyyanm ennit aakanam data send cheyandath
            const data = new FormData();
            console.log("data", data);

            data.append("addName", addName);
            data.append("location", location);
            data.append("price", price);
            //   data.append("roomType", roomType);

            //nammal backend routes akath(multer use cheytha same name thanne key aayit kodukanam)
            data.append("user_profile", image);

            const result = await AddPackageApi(data, headerConfig);
            if (result.status >= 200 && result.status < 300) {
                alert("data added ");
                setAddPackage({
                    ...addPackage,
                    addName: "",
                    location: "",
                    price: ""

                });
                setImage("");
            } else {
                console.log("unable to post");
            }
        }
    };
    //   console.log(addPackage);
    //   console.log(image);


    return (
        <div><Header></Header>
        <div id='container' className='text-white' style={{ height: '90vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: ' linear-gradient(rgb(255,193,7), rgba(11, 10, 5, 0.426)), url("https://i.postimg.cc/FHrd0jJW/pexels-vincent-rivaud-2227774.jpg")'
, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >


            <Row style={{ backgroundImage: 'linear-gradient(rgb(12, 13, 14), rgba(10, 11, 12, 0.455))', marginLeft: 'auto', marginRight: 'auto' }}>
                <h4 className='text-center mt-4 mb-4' style={{ fontFamily: 'Russo One, sans-serif'}} >Add Resorts</h4>

                <Col lg={6} md={6} sm={12}>
                    <Form  >
                        <Form.Group className="mb-3" >
                            <Form.Label style={{ fontFamily: 'monospace' }}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name Of Resort" name='addName' onChange={(e) => addInput(e)} />
                        </Form.Group>


                        <Form.Group className="mb-3" >
                            <Form.Label style={{ fontFamily: 'monospace' }}>Location</Form.Label>
                            <Form.Control type="text" placeholder="Location" name='location' onChange={(e) => addInput(e)} />


                        </Form.Group>




                    </Form>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Form>


                        <Form.Group className="mb-3" >
                            <Form.Label style={{ fontFamily: 'monospace' }}>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" name='price' onChange={(e) => addInput(e)} />
                        </Form.Group>

                        {/* <Form.Group className="mt-2" >
                            <Form.Label>Room Type</Form.Label><br></br>
                            <select name="roomType" id="" className='text-dark' style={{ height: '40px', borderRadius: '10px' }} onChange={(e)=>addInput(e)}>
                                <option value="Single Room">Single Share</option>
                                <option value="Two Share">Two Share</option>
                                <option value="Four Share">Four Share</option>


                            </select>
                        </Form.Group> */}


                        <Form.Group className="mb-2 mt-4" >
                            <Form.Label style={{ fontFamily: 'monospace' }}>Image of Resort</Form.Label>
                            <input type='file' className='' name='profile' onChange={(e) => chooseImage(e)} style={{ fontFamily: 'monospace' }} ></input>
                        </Form.Group>




                        <Form.Group className="mt-4 mb-2"  >
                            <Button onClick={handleData} type='button' className='w-25 ' style={{ fontFamily: 'Russo One, sans-serif'}}>Add</Button>
                        </Form.Group>

                    </Form>

                </Col>

            </Row>



        </div>
        </div>

    )
}

export default Add