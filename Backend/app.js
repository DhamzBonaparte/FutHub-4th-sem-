const express = require("express");
const app = express();
const cors = require("cors");
const connect = require('./Database/db');
const credentials = require('./Routes/route');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api/v1',credentials);

const URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    if(await connect(URL)){
        console.log("Database Connected");
    }
    app.listen(PORT, () => {
      console.log("Server connected!");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
