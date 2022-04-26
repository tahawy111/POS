require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connect");
const Products = require("./models/productSchema");

app.listen(3000, () => console.log("App is listen 3000"));
