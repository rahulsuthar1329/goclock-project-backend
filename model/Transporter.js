import mongoose from "mongoose";

const TransporterSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      require: true,
      unique: true,
      min: 6,
    },
    price: {
      type: String,
      require: true,
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

const Transporter = mongoose.model("Transporter", TransporterSchema);
export default Transporter;
