import { useState, useEffect } from 'react';

import LaptopCard from '../../components/LaptopCard/LaptopCard';
import NewLaptopForm from '../../components/NewLaptopForm/NewLaptopForm';

const Laptops = () => {
  const BASE_URL = 'http://localhost:4000/api/laptops';

  const [laptops, setLaptops] = useState([]);

  const getLaptops = async () => {
    try {
      const response = await fetch(BASE_URL);
      const allLaptops = await response.json();
      setLaptops(allLaptops);
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  useEffect(() => {
    getLaptops();
  }, []);

  return (
    <>
      {/* <LaptopCard getLaptops={getLaptops} laptops={laptops} setLaptops={setLaptops} /> */}

      <div className="">
        <div className="row">
          <div className="col s12 m6">
            <LaptopCard
              getLaptops={getLaptops}
              laptops={laptops}
              setLaptops={setLaptops}
            />
          </div>
          <div className="col s12 m6 container">
            <NewLaptopForm getLaptops={getLaptops} setLaptops={setLaptops} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Laptops;
