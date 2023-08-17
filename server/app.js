const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/index");

app.use('/', router);

mongoose.connect(process.env.MONGODB_URI);

//checks status of connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open",  () => {
  console.log("DB connected successfully");
});

app.listen(port, () => {
  console.log(`Meetcode server is listening on port ${port}`);
});
