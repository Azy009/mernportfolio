const dotenv = require("dotenv");
dotenv.config()
const web = require("./routes/web.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const connectdb = require("./db/connection.js");
require("./Models/contactus");
const port = process.env.PORT || 8000;
const database = process.env.database || "mongodb+srv://azy6049:as1816444@cluster0.hxfuyyu.mongodb.net/?retryWrites=true&w=majority";

connectdb(database);
app.use(express.json());

app.use("/", web);

app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
