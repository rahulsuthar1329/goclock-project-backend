import express from "express";
import {
  manufacturer,
  manufacturerprice,
  transporter,
} from "../controller/post.js";

const router = express.Router();

router.post("/transporter", transporter);
router.post("/manufacturer", manufacturer);
router.post("/manufacturerprice", manufacturerprice);

export default router;
