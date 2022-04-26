const mongoose = require("mongoose");
const db =
  "mongodb+srv://admin:admin123456@cluster0.wsttd.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((err) => console.log(err.message));
