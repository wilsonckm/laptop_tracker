import { useState } from 'react';

const EditLaptopForm = ({ laptop, getLaptops }) => {
  const [editForm, setEditForm] = useState({
    brand: laptop.brand,
    model: laptop.model,
    color: laptop.color,
    ssd: laptop.ssd,
    ram: laptop.ram,
  });
  const BASE_URL = 'http://localhost:4000/api/laptops';

  const handleChange = (evt) => {
    const editLaptopForm = { ...editForm, [evt.target.name]: evt.target.value };
    setEditForm(editLaptopForm);
    // console.log(editLaptopForm);
    console.log(laptop._id);
    console.log(editForm);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const options = {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editForm),
    };
    try {
      await fetch(`${BASE_URL}/${laptop._id}/`, options);
    } catch (error) {
      console.log(error);
    }
    getLaptops();
  };

  return (
    <div className="row">
      <form className="col" onSubmit={handleSubmit}>
        <input
          className="input-field col s6"
          type="text"
          name="brand"
          value={editForm.brand}
          onChange={handleChange}
        />
        <input
          className="input-field col s6"
          type="text"
          name="model"
          value={editForm.model}
          onChange={handleChange}
        />
        <input
          className="input-field col s6"
          type="text"
          name="color"
          value={editForm.color}
          onChange={handleChange}
        />
        <input
          className="input-field col s6"
          type="text"
          name="ssd"
          value={editForm.ssd}
          onChange={handleChange}
        />
        <input
          className="input-field col s6"
          type="text"
          name="ram"
          value={editForm.ram}
          onChange={handleChange}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditLaptopForm;
