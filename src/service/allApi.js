import { BASE_URL } from "./baseUrl";
import { commonStructure } from "./commonRequest";

//user register
export const userRegisterApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/user/register`,body)
}

//user Login
export const userLoginApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/user/login`,body)
} 


//add package
export const AddPackageApi=async(body,header)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/addPackage`,body,header)
}

//get packages
export const getPackageApi=async()=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-packages`,{})
} 

//get single view
export const getSingleView=async(id)=>{
    return await commonStructure('GET',`${BASE_URL}/user/singleview/${id}`,'')
}

//booking
export const bookingApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/user/booking`,body)
}

//get all booking details
export const AllBookingData=async()=>{
    return await commonStructure("GET",`${BASE_URL}/admin/all-booking`,"")
}

//searchkey
export const searchBarApi=async(searchkey)=>{
    return await commonStructure("GET",`${BASE_URL}/user/search?search=${searchkey}`,"")
}

//admin login
export const adminLoginApi=async(body)=>{ 
    return await commonStructure("POST",`${BASE_URL}/admin/login`,body)
}
