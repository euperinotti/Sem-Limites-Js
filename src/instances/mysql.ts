import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const componentSequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: "mysql",
        port: Number(process.env.MYSQL_PORT)
    }
)