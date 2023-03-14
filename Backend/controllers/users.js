const User = require("../models/users");
const bcrypt = require("bcrypt");
exports.users = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.register = async (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;
    const intro = req.body.intro;
    const address = req.body.address;
    const profile = req.file.filename;
    console.log(req.file.filename);
    const hash = await bcrypt.hash(password, 12);
    const user = {
        firstname:firstname,
        lastname:lastname,
        username:username,
        mobile:mobile,
        email:email,
        password:hash,
        intro:intro,
        address:address,
        profile:profile
    }
    try {
        const existinguser = await User.findOne({ email: email });
        if (existinguser) {
          return res.status(404).json("Email already exist");
        }
  
        const saveduser = await User.create(user);
        res.status(201).json(saveduser);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
};
exports.show = async (req, res, next) => {
  const usId = req.params.userId;
  //console.log(usId);
  try {
    const users = await User.findById(usId);
    //console.log(users);
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.delete = async (req, res, next) => {
  const usId = req.params.userId;

  try {
    const users = await User.findByIdAndRemove(usId);
    res.status(204).json("User deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  const usId = req.params.userId;
  console.log(req.body);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const intro = req.body.intro;
    const address = req.body.address;
  if (req.file) {
    const profile = req.file.filename;
    users = {
        firstname:firstname,
        lastname:lastname,
        username:username,
        mobile:mobile,
        email:email,
        intro:intro,
        address:address,
        profile:profile
    };
  } else {
    users = {
      firstname:firstname,
        lastname:lastname,
        username:username,
        mobile:mobile,
        email:email,
        intro:intro,
        address:address
    };
  }

  try {
    const saveduser = await User.findByIdAndUpdate(usId, users);
    const newuser = await User.findById(usId);
    res.status(201).json(newuser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


