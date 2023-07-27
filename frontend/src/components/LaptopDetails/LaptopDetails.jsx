import { useState } from 'react';
import EditLaptopForm from '../EditLaptopFrom/EditLaptopForm';

const LaptopDetails = ({ laptop }) => {
  const [editBtn, setEditBtn] = useState(true);
  // container component needs to go to parent component, LaptopCard.jsx
  return (
    <>
      {editBtn && (
        <div>
          <p>Brand: {laptop.brand} </p>
          <p>Model: {laptop.model} </p>
          <p>Color: {laptop.color} </p>
          <p>SSD: {laptop.ssd} GB</p>
          <p>Ram: {laptop.ram} GB</p>
        </div>
      )}

      {!editBtn && <EditLaptopForm laptop={laptop} />}

      <button onClick={() => setEditBtn(!editBtn)}>edit</button>
    </>
  );
};

export default LaptopDetails;
