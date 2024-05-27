import { DataSource } from "typeorm";
import { UserAPI } from "./entities/UserAPI";
import { config } from "dotenv";
import { UserPosts } from "./entities/UserPosts";
import "reflect-metadata";
config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities:[UserAPI, UserPosts],
    subscribers:[],
    migrations:[],
})