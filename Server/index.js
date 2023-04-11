import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express ();
dotenv.config();

app.use (bodyParser.json({limit: "30mb", extended: true}));
app.use (bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

 const PORT = process.env.PORT || 4000

 mongoose.connect(process.env.CONNECT_URL,{useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => app.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`)))
 .catch((error) => console.log(`${error} did not connect`));