require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connect");
const Products = require("./models/productSchema");
const cors = require("cors");
const router = require("./routes/router");

// USE
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("App is listen 4000"));
