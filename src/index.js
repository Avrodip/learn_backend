import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import express from 'express';
// import dotenv from 'dotenv';
import connectDB from "../db/index.js";
// dotenv.config();
const app = express();


connectDB();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Errrr",error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is listening to port ${process.env.PORT} `)
//         })
//     }
//     catch (error) {
//         console.error("Error", error);
//         throw error
//     }
// })()