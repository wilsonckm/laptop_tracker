//To interact with db we need the schema and mongoose library
const Laptop = require("../models/laptopModel");
const mongoose = require("mongoose");

//GET all laptops
const getLaptops = async (req, res) => {
  //find all laptops in db sort them in order based on wheren they were added
  const laptops = await Laptop.find({}).sort({ createdAt: -1 });
  //sends the data back in json format
  res.status(200).json(laptops);
};

//GET a single laptop
const getLaptop = async (req, res) => {
  //destructing the id of the request object
  const { id } = req.params;

  //Check if the id is a valid mongo id. (valid mongoid = 24chars)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such laptopt with this id" });
  }

  const laptop = await Laptop.findById(id);
  //Check if laptop doesn't exist return a 4040 and a message
  //otherwise return the laptop object in json
  if (!laptop) {
    return res.status(404).json({ error: "No such laptop" });
  }
  res.status(200).json(laptop);
};

//CREATE new laptop
const createLaptop = async (req, res) => {
  //Desctructure the keys from the laptop schema
  const { brand, model, color, ssd, ram } = req.body;
  try {
    const newLaptop = { brand, model, color, ssd, ram };
    const laptop = await Laptop.create(newLaptop);
    res.status(200).json(laptop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a laptop
const deleteLaptop = async (req, res) => {
  //destructing the id of the request object
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such laptop" });
  }

  const laptop = await Laptop.findByIdAndDelete({ _id: id });

  if (!laptop) {
    //Return so the client can be informed about the error
    return res.status(404).json({ error: "No such laptop" });
  }
  res.status(200).json(laptop);
};





module.exports = {
  getLaptops,
  createLaptop,
  getLaptop,
  deleteLaptop
};
