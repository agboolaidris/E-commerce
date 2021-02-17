const express = require("express");
const app = express();
const mongose = require("mongoose");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

//setting up environment variable
require("dotenv").config();

//setting up mongodb
mongose.connect(
  "mongodb://localhost:27017/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected successful");
  }
);
//setting up cross origin resources sharing
app.use(cors());

//setting up cookieparser
app.use(cookieparser());

//setting up bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up Routers
app.use("/api/auth", require("./Routes/Auth"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
