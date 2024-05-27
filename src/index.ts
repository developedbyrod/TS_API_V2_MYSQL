import "reflect-metadata";

import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";

dotenv.config();

const app = express();
const port = process.env.PORT;



AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log("Server started at: ", port)
        })
    })
    .catch((error) => console.error(error))