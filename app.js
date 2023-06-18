const dotenv = require("dotenv");
dotenv.config()
const web = require("./routes/web.js");
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(cors())
const connectdb = require("./db/connection.js");
require("./Models/contactus");
const port = process.env.PORT || 8000;
const database = process.env.database || "mongodb+srv://azy6049:as1816444@cluster0.hxfuyyu.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
connectdb(database);
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

app.use("/", web);

app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
