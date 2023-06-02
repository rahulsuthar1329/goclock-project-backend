import mongoose from "mongoose";

// Creating User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    required: true,
    possibleValues: ["manufacturer", "transporter"],
  },
});

//Creating Model
const User = mongoose.model("User", UserSchema);
export default User;
