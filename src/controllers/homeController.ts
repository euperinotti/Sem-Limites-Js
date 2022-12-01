import { Request, Response } from "express";
import sequelize from "sequelize";
import { componentSequelize } from "../instances/mysql";

export const home = async (req: Request, res: Response) => {

    try {
        await componentSequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.log('Unable to connect to the database:', error);
        }

    res.render('pages/index.ejs');
}