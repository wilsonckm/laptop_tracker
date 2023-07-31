//Require dotenv to use variables from .env file
require('dotenv').config();

//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const laptopRoutes = require('./routes/laptops');
const cors = require('cors');

//EXPRESS APP
const app = express();

//destruct the port variable from the .env file
const { PORT, MONGO_URI } = process.env;

//MIDDLEWARE
//If there's any body(data) to the reques object, it attached it to the req object in JSON format
app.use(express.json());

//whenever a request comes to the server this will log its path and the method (GET,POST etc...)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors());
//ROUTES
//This will provide an entry point to the laptops page
app.use('/api/laptops', laptopRoutes);

const port = PORT || 4000;

//CONNECT TO DB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    //App listener, gives feedback if connected to datatabse
    app.listen(port, () => {
      console.log(`Connected to db and listening on port ${PORT}`);
    });
  })
  //It logs an error to the console if any occurs
  .catch((error) => {
    console.log(error);
  });
