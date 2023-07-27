
import { useState, useEffect } from 'react';



import LaptopCard from '../../components/LaptopCard/LaptopCard';

const Laptops = () => {
  const BASE_URL = 'http://localhost:4000/api/laptops';

  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    const getLaptops = async () => {
      try {
        const response = await fetch(BASE_URL);
        const allLaptops = await response.json();
        setLaptops(allLaptops);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    getLaptops();
  }, []);

  return (
    <>
      <LaptopCard laptops={laptops} />
    </>
  );
};

export default Laptops;
