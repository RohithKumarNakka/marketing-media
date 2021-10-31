const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/auth");
const cookieparser = require("cookie-parser");

require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());
app.use(cookieparser());
app.use(router);

const PORT = process.env.PORT || 5000;

app.get("/aboutus", (req, res) => {
  res.send("Hello About World from the server");
});

// app.get("/contact", (req, res) => {
//   res.send("Hello Contact World from the server");
// });

// app.get("/profile", (req, res) => {
//   res.send("Hello Profile World from the server");
// });

app.get("/signin", (req, res) => {
  res.send("Hello sign in World from the server");
});

app.get("/signup", (req, res) => {
  res.send("Hello sign up World from the server");
});

if (process.env.NODE_ENV === "Production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
