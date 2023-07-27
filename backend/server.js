//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

//EXPRESS APP
const app = express();

//MIDDLEWARE
//If there's any body(data) to the reques object, it attached it to the req object in JSON format
app.use(express.json());

//whenever a request comes to the server this will log its path and the method (GET,POST etc...)
app.use((req, res, next) => {
  console.log(req.path, req.method);
});

//ROUTES
//This will provide an entry point to the laptops page
app.use("api/laptops", laptopRoutes);

//CONNECT TO DB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    //App listener, gives feedback if connected to datatabse
    app.listen(PORT, () => {
      console.log(`Connected to db and listening on port ${PORT}`);
    });
  })
  //It logs an error to the console if any occurs
  .catch((error) => {
    console.log(error);
  });
