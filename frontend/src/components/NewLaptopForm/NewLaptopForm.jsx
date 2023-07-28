import { useState } from 'react';

const NewLaptopForm = ({ getLaptops, setLaptops }) => {
  const BASE_URL = 'http://localhost:4000/api/laptops';
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
      // setNewLaptop({});
      getLaptops();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Brand"
              id="brand"
              type="text"
              className="validate"
              name="brand"
              value={newLaptop.brand}
              onChange={handleChange}
            />
            <label for="brand">Brand</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="model"
              id="model"
              type="text"
              className="validate"
              name="model"
              value={newLaptop.model}
              onChange={handleChange}
            />
            <label for="model">model</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="color"
              id="color"
              type="text"
              className="validate"
              name="color"
              value={newLaptop.color}
              onChange={handleChange}
            />
            <label for="color">color</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="ssd"
              id="ssd"
              type="text"
              className="validate"
              name="ssd"
              value={newLaptop.ssd}
              onChange={handleChange}
            />
            <label for="ssd">ssd</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="ram"
              id="ram"
              type="text"
              className="validate"
              name="ram"
              value={newLaptop.ram}
              onChange={handleChange}
            />
            <label for="ram">ram</label>
          </div>
        </div>
        <button type="submit">Add Laptop</button>
      </form>
    </div>
  );
};

export default NewLaptopForm;
