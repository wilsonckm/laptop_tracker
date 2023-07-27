//assiging to the express variable the requires express library
const express = require("express");

const { 
  getLaptops, 
  getLaptop,
  createLaptop,
 } = require("../controllers/laptopController");

//assigning express' Router component to the router variable
const router = express.Router();

//All routes start with /api/laptops
//This was determined in server.js for the laptop routes

//GET all laptops
router.get("/", getLaptops);

//GET a single laptopt
router.get('/:id', getLaptop)


//POST a new laptop
router.post("/", createLaptop);









//exporting to make it accessible to other parts of the applicaton
module.exports = router;
