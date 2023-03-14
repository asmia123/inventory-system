const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const regex = ["(03)?[0-9]{2}?[0-9]{7}"];

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter your firstname"],
      trim: true,
      minlength: [4, "Your name must contain atleast 4 characters"],
      validate: [validator.isAlpha, "Your name must contain only characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter your lastname"],
      trim: true,
      minlength: [4, "Your name must contain atleast 4 characters"],
      validate: [validator.isAlpha, "Your name must contain only characters"],
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      trim: true,
      unique: [true, "This Username is not available"],
      minlength: [4, "Your name must contain atleast 4 characters"],
      validate: [validator.isAlpha, "Your name must contain only characters"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter your email"],
      unique: [true, "This Email already exist, try other one"],
      lowercase: true,
      validate: [
        validator.isEmail,
        "Please enter a valid email e.g: abc@xyz.com ",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [8, "A password must be 8 character long"],
    },
    mobile: {
      type: String,
      required: [true, "Please enter your mobile n0"],
      trim: true,
      // minlength: [11, "Your mobile n0 must contain atleast 11 digits"],
      // match: [regex, "Invalid Mobile number"],
      // validate: [validator.isMobilePhone, "Invalid Mobile number"],
    },
    intro: {
      type: String,
      trim: true,
      required: [true, "Please enter your introduction"],
    },
    profile: {
      type: String,
      required: [true, "Please select your profile photo"],
    },
    address: {
      type: String,
      trim: true,
      required: [true, "Address is required field"],
    },
    resetLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
