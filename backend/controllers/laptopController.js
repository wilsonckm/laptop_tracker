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


//CREATE new laptop
const createLaptop = async (req, res) => {
  //Desctructure the keys from the laptop schema
  const { brand, model, color, ssd, ram } = req.body;
  try {
    const newLaptop = { brand, model, color, ssd, ram }
    const laptop = await Laptop.create(newLaptop);
    res.status(200).json(laptop)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getLaptops,
  createLaptop
};
