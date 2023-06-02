import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import dataRoutes from "./routes/data.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/data", dataRoutes);

app.listen(port, (err) => {
  if (err) console.log("Server starting error : ", err);
  else console.log(`Server Listening at port ${port}`);
});
