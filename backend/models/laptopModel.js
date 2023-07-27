//requiring mongoose and assigning it to mongoose variable
const mongoose = require("mongoose");

//accessing Schema from mongoose library and assigning it to Schema var for easier access to it

const Schema = mongoose.Schema;

//Defining the model's attributes
const laptopSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    ssd: {
      type: String,
      required: true,
    },
    ram: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//exporting the module 'Laptop' and passing the schema to it in the second argument
module.exports = mongoose.model("Laptop", laptopSchema);
