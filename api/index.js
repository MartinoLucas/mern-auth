import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(()=>{console.log("Database connected correctly")})
    .catch((e) => {console.log("An error has ocurred: ",e)});
const app = express();

app.listen(3000, () => {
    console.log("Server listening o port 3000")
});

