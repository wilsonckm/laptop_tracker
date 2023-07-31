import { useState } from 'react';
import EditLaptopForm from '../EditLaptopFrom/EditLaptopForm';

const LaptopDetails = ({ laptop, getLaptops, onDelete }) => {
  const [editBtn, setEditBtn] = useState(true);
  // container component needs to go to parent component, LaptopCard.jsx

  const BASE_URL = 'http://localhost:4000/api/laptops';

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${laptop._id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      getLaptops();
      if (response.ok) {
        onDelete(laptop._id);
      } else {
        console.error('Failed to delete laptop from the server.');
      }
    } catch (error) {
      console.error('Error occurred while deleting laptop:', error);
    }
  };

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

      {!editBtn && (
        <EditLaptopForm
          laptop={laptop}
          getLaptops={getLaptops}
          setEditBtn={setEditBtn}
        />
      )}

      <button
        className="btn blue waves-effect waves-light mr"
        onClick={() => setEditBtn(!editBtn)}
      >
        {editBtn ? 'Edit' : 'Back'}
      </button>
      {editBtn && (
        <button
          className="btn blue waves-effect waves-light ml"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </>
  );
};
export default LaptopDetails;
