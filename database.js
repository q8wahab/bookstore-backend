const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connecDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connect to DB");
  } catch (error) {
    console.log("ERROR NOT CONNECTED", error);
  }
};

module.exports = connecDB;
