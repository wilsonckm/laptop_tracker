import { useState, useEffect } from 'react';

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const getLaptops = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await fetch(
          'http://localhost:4000/api/laptops',
          'GET',
        );
        const json = await response.json();

        setLaptops(JSON.stringify(json));
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    getLaptops();
  }, []);

  return (
    <>
      <p>{laptops}</p>
    </>
  );
};

export default Laptops;
