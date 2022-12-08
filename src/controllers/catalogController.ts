import { Request, Response } from "express";
import sequelize from "sequelize";
import { componentSequelize } from "../instances/mysql";
import { Produto } from "../models/Product";

export const home = async (req: Request, res: Response) => {
    let allProducts = await Produto.findAll();

    console.log(allProducts)

    res.render('pages/catalog.ejs', {
        pageName: 'Catalogo',
        allProducts
    });
}

export const productView = async (req: Request, res: Response) => {

    let selectedProduct = await Produto.findByPk(req.params.idproduto);

    console.log(selectedProduct);

    res.render('pages/product-description.ejs', {
        pageName: 'Catalogo',
        selectedProduct
    });
}