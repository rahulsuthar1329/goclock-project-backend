import Manufacturer from "../model/Manufacturer.js";
import Transporter from "../model/Transporter.js";
import db from "../db/connect.js";

const manufacturer = async (req, res) => {
  db.connect();
  try {
    const { orderId, to, from, quantity, address, transporter, manufacturer } =
      req.body;
    const entry = new Manufacturer({
      orderId,
      to,
      from,
      quantity,
      address,
      transporter,
      manufacturer,
    });
    const data = await entry.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json({ msg: err });
    console.log(err);
  }
};

const manufacturerprice = async (req, res) => {
  db.connect();
  try {
    const { orderId, price } = req.body;

    const exist = await Manufacturer.find({ orderId });
    if (exist.length) {
      const response = await Manufacturer.updateOne(
        { orderId },
        { price: price }
      );
      return res.status(204).send(response);
    }
    res.status(200).send("Error!");
  } catch (err) {
    res.status(500).json({ msg: err });
    console.log(err);
  }
};

const transporter = async (req, res) => {
  db.connect();
  try {
    const { orderId, price, transporter, manufacturer } = req.body;

    const entry = new Transporter({
      orderId,
      price,
      transporter,
      manufacturer,
    });
    const data = await entry.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json({ msg: err });
    console.log(err);
  }
};

export { transporter, manufacturer, manufacturerprice };
