import express from "express";
import { manufacturer, transporter } from "../controller/query.js";

const router = express.Router();

router.get("/transporter", transporter);
router.get("/manufacturer", manufacturer);

export default router;
