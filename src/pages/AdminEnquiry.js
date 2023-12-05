import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import {AllBookingData} from '../service/allApi'
import Header from '../components/Header';


function AdminEnquiry() {

    const [bookingData,setBookingData]=useState([])
    
    const getBooking=async()=>{
        const Response = await AllBookingData()
        setBookingData(Response.data)
    }
    useEffect(()=>{
        getBooking()
    },[])
  return (

    <div className='bg-warning mt-0' >   <Header></Header>
    <div className=''  > 
        <Container className=' bg-warning mt-5 pb-4' >
          
        <Table striped bordered hover className='mt-0 mb-4' >
            <thead>
                <tr>
                <th>#</th>
                <th style={{ fontFamily: 'Russo One, sans-serif'}} >Name</th>
                <th style={{ fontFamily: 'Russo One, sans-serif'}} >Email</th>
                <th style={{ fontFamily: 'Russo One, sans-serif'}} >Phone</th>
                <th style={{ fontFamily: 'Russo One, sans-serif'}} >Resort</th>
                <th style={{ fontFamily: 'Russo One, sans-serif'}} >CheckIn</th>
                <th style={{ fontFamily: 'Russo One, sans-serif'}} >CheckOut</th>
                </tr>
            </thead>
            <tbody>
                {bookingData.length>0?bookingData.map((i,index)=>(
                    <tr>
                        <td style={{ fontFamily: 'monospace' }}>{index+1}</td>
                        <td style={{ fontFamily: 'monospace' }}>{i.rname}</td>
                        <td style={{ fontFamily: 'monospace' }}>{i.remail}</td>
                        <td style={{ fontFamily: 'monospace' }}>{i.rphno}</td>
                        <td style={{ fontFamily: 'monospace' }}>{i.resortName}</td>
                        <td style={{ fontFamily: 'monospace' }}>{i.checkIn}</td>
                        <td style={{ fontFamily: 'monospace' }}>{i.checkOut}</td>
                    </tr>
                )):("No Data")
                    }
            </tbody>
        </Table>
        </Container>
         
    </div>
    </div>
  )
}

export default AdminEnquiry