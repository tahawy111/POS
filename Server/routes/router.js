const express = require("express");
const router = express.Router();
const Products = require("../models/productSchema");

// router.get("/", (req, res) => {
//   console.log("Connect");
// });

router.post("/add", (req, res) => {
  const { name, image, price, barcode } = req.body;

  if (!name || !image || !price || !barcode) {
    res.status(404).send("plz fill the data");
  }
  try {
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
