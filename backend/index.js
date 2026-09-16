import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";
import dbconnect from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

dbconnect();

app.use(router);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on ${PORT}`);
});
