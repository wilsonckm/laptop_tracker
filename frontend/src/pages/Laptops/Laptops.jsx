
import {useState, useEffect} from 'react';



const Laptops =()=>{
  const BASE_URL= "http://localhost:4000/api/laptops";

  const [laptops, setLaptops] = useState([])
  useEffect(()=>{
    const getLaptops = async()=>{
      try{
        const response = await fetch(BASE_URL )
        const allLaptops = await response.json()
        setLaptops(allLaptops)
      }catch(error){
        console.log({error: error.message})
      }
    }
    getLaptops()
  },[])




  return(
    <>
    {laptops.map((laptop)=>(
      <div key={laptop._id} className='laptops-container'>
        <h4>Brand: {laptop.brand}</h4>
        <h4>Model: {laptop.model}</h4>
        <h4>Color: {laptop.color}</h4>
        <h4>SSD: {laptop.ssd}GB</h4>
        <h4>RAM: {laptop.ram}GB</h4>
      </div>
    ))}
    </>
  )
}


export default Laptops;
