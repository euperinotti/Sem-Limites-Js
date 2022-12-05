import { Request, Response } from "express";
import sequelize from "sequelize";
import { componentSequelize } from "../instances/mysql";

export const home = async (req: Request, res: Response) => {
    res.render('pages/catalog.ejs');
}