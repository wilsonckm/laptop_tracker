//assiging to the express variable the requires express library
const express = require("express");

const { getLaptops, createLaptop } = require("../controllers/laptopController");

//assigning express' Router component to the router variable
const router = express.Router();

//All routes start with /api/laptops
//This was determined in server.js for the laptop routes

//GET all laptops
router.get("/", getLaptops);

//POST a new laptop
router.post("/", createLaptop);

//exporting to make it accessible to other parts of the applicaton
module.exports = router;
