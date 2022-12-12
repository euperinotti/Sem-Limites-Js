import { Request, Response } from "express";
import sequelize from "sequelize";
import { componentSequelize } from "../instances/mysql";
import { Produto } from "../models/Product";
import { Category } from "../models/Category"

export const home = async (req: Request, res: Response) => {
    let allProducts = await Produto.findAll();

    res.render('pages/catalog.ejs', {
        pageName: 'Catalogo',
        allProducts
    });
}

export const productView = async (req: Request, res: Response) => {

    let selectedProduct = await Produto.findByPk(req.params.idproduto);
    let productCategory = await Category.findByPk(selectedProduct?.idproduto);

    res.render('pages/product-description.ejs', {
        pageName: 'Catalogo',
        selectedProduct,
        productCategory
    });
}