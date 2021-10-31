const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(400).json({ error: "Please fill the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "Passwords are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({ message: "User registered successfully!" });
      } else {
        res.status(500).json({ error: "Failed to register" });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data properly!" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000), //3daysinms
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        res.status(200).json({ message: "User loggedin successfully!" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/profile", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//contact user data
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//contact page
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.json({ error: "Please fill the contact form" });
    }

    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      await userContact.addMessage(name, email, phone, message);

      await userContact.save();
      res.status(201).json({ message: "Your message is sent" });
    }
  } catch (e) {
    res.send(e);
  }
});

//logout page
router.get("/logout", (req, res) => {
  console.log(`Please login!`);
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logged out");
});

module.exports = router;
