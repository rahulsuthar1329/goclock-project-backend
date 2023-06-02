import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import db from "../db/connect.js";
import dotenv from "dotenv";
dotenv.config();

// Register User
export const register = async (req, res) => {
  db.connect();
  try {
    const { name, email, password, mobile, address, role } = req.body;

    const user = await User.find({ email });
    if (user.length)
      return res.status(200).json({ msg: "User Already Exist!" });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      mobile,
      address,
      role,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

// Logging In
export const login = async (req, res) => {
  db.connect();
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials!" });
    user.password = undefined;
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
