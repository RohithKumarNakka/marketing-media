const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./cofig.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Sucessful");
  })
  .catch((e) => console.log(`No Connection: ${e}`));
