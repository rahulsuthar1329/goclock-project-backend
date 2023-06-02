import mongoose from "mongoose";

// Creating User Schema
const ManufacturerSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      require: true,
      unique: true,
      min: 6,
    },
    to: {
      type: String,
      require: true,
    },
    from: {
      type: String,
      require: true,
    },
    quantity: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    price: {
      type: String,
    },
    transporter: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    manufacturer: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  },
  { timestamps: true }
);

//Creating Model
const Manufacturer = mongoose.model("Manufacturer", ManufacturerSchema);
export default Manufacturer;
