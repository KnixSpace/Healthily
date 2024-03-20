const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Hello Node ");
});

const PORT = 3000 || process.env.PORT;
mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
  console.log("Connected to Database...");
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}...`);
  });
});
