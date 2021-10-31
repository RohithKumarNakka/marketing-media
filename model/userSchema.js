const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//hashing password
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
    user.cpassword = await bcrypt.hash(user.cpassword, 8);
  }

  next();
});

//Generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    const user = this;
    let token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    user.tokens = user.tokens.concat({ token: token });
    await user.save();
    return token;
  } catch (e) {
    console.log(e);
  }
};

//storing message
userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    const user = this;
    user.messages = user.messages.concat({ name, email, phone, message });
    await user.save();
    return user.messages;
  } catch (e) {
    console.log(e);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
