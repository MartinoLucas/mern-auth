import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(()=>{console.log("Database connected correctly")})
    .catch((e) => {console.log("An error has ocurred: ",e)});

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Server listening o port 3000")
});

app.use("/api/user", userRoutes);

app.use("/api/auth",authRoutes)