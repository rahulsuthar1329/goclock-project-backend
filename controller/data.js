import mongoose from "mongoose";
import Manufacturer from "../model/Manufacturer.js";
import db from "../db/connect.js";
import Transporter from "./../model/Transporter.js";

const manufacturer = async (req, res) => {
  db.connect();
  try {
    const data = await Manufacturer.find();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const transporter = async (req, res) => {
  db.connect();
  try {
    const data = await Transporter.find();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export { transporter, manufacturer };
