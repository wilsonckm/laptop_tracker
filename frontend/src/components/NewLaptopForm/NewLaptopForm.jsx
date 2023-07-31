import { useState } from 'react';

const NewLaptopForm = ({ getLaptops, setLaptops }) => {
  const BASE_URL =
    'https://secret-cove-46952-926c125f7927.herokuapp.com/api/laptops';
  const [newLaptop, setNewLaptop] = useState({
    brand: '',
    model: '',
    color: '',
    ssd: '',
    ram: '',
  });

  const handleChange = (evt) => {
    const newLaptopForm = { ...newLaptop, [evt.target.name]: evt.target.value };
    setNewLaptop(newLaptopForm);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLaptop),
    };
    try {
      await fetch(BASE_URL, options);
      setLaptops([...newLaptop]);
    } catch (error) {
      console.log(error);
    }
    setNewLaptop({
      brand: '',
      model: '',
      color: '',
      ssd: '',
      ram: '',
    });
    getLaptops();
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="brand"
              type="text"
              className="validate"
              name="brand"
              value={newLaptop.brand}
              onChange={handleChange}
            />
            <label htmlFor="brand">Brand</label>
          </div>
          <div className="input-field col s6">
            <input
              id="model"
              type="text"
              className="validate"
              name="model"
              value={newLaptop.model}
              onChange={handleChange}
            />
            <label htmlFor="model">Model</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="color"
              type="text"
              className="validate"
              name="color"
              value={newLaptop.color}
              onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="ssd"
              type="text"
              className="validate"
              name="ssd"
              value={newLaptop.ssd}
              onChange={handleChange}
            />
            <label htmlFor="ssd">SSD</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="ram"
              type="text"
              className="validate"
              name="ram"
              value={newLaptop.ram}
              onChange={handleChange}
            />
            <label htmlFor="ram">RAM</label>
          </div>
        </div>
        <button className="btn blue waves-effect waves-light" type="submit">
          Add Laptop
        </button>
      </form>
    </div>
  );
};

export default NewLaptopForm;
