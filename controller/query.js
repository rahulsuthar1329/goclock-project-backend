import mongoose from "mongoose";
import User from "../model/User.js";
import db from "../db/connect.js";

const transporter = async (req, res) => {
  db.connect();
  try {
    const data = await User.find({ role: "transporter" }).exec();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const manufacturer = async (req, res) => {
  db.connect();
  try {
    const data = await User.find({ role: "manufacturer" }).exec();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export { transporter, manufacturer };
