import { Model } from "sequelize";
import { componentSequelize } from "../instances/mysql";

type ProductCategory = 'Camiseta' | 'Calça' | 'Bermuda' | 'Tênis' | 'Jaqueta' | 'Moletom';
type ProductSize = '36' | '37' | '38' | '39' | '40' | '41' | 'P' | 'M' | 'G' | 'GG';

export class Product extends Model {
    nome: string;
    categoria: ProductCategory;
    tamanho: ProductSize;
    preco: number;
    imagem?: string;
    cor: string;
    estoque: number;
    descricao?: string;
    desconto?: number;

    constructor(nome: string, categoria:ProductCategory, tamanho: ProductSize, preco:number, cor: string, estoque: number, imagem?:string, descricao?: string, desconto?: number){
        super();

        this.nome = nome;
        this.categoria = categoria;
        this.tamanho = tamanho;
        this.preco = preco;
        this.cor = cor;
        this.estoque = estoque;
        if(imagem){
            this.imagem = imagem;
        }
        if(descricao){
            this.descricao = descricao;
        }
        if(desconto){
            this.desconto = desconto;
        }
    }
}

export const Produto = componentSequelize.define<Product>('produto',


)