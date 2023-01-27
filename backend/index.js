import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import cors from 'cors'
import router from "./Routes/routes.js";
import connect from "./Database/db.js";
console.log("hello")

const app = express();
const PORT = 8080;
app.use(bodyParser.json())
app.use(cors())
app.use(router)

await connect();
app.listen(PORT, ()=>{
    console.log(`server is running at port${PORT}`)
})




