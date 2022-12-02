import { Model, DataTypes, Op } from "sequelize";
import { componentSequelize } from "../instances/mysql";

type ProductCategory = 'Camiseta' | 'Calça' | 'Bermuda' | 'Tênis' | 'Jaqueta' | 'Moletom';
type ProductSize = '36' | '37' | '38' | '39' | '40' | '41' | 'P' | 'M' | 'G' | 'GG';

export class Product extends Model {
    nome: string;
    categoria: number;
    tamanho: ProductSize;
    preco: number;
    cor: string;
    estoque: number;
    imagem?: string;
    descricao?: string;
    desconto?: number;

    constructor(nome: string, categoria:number, tamanho: ProductSize, preco:number, cor: string, estoque: number, imagem?:string, descricao?: string, desconto?: number){
        super();

        this.nome = nome.trim().slice(0,60);
        this.categoria = categoria;
        this.tamanho = tamanho;
        this.preco = parseFloat(`${preco}`);
        this.cor = cor;
        this.estoque = estoque;
        this.imagem ? imagem : null
        this.descricao ? descricao : null;
        this.desconto ? parseFloat(`${desconto}`) : null;
        
    }
}

export const Produto = componentSequelize.define<Product>('Produto',{
    idproduto: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categoria',
            key: 'idcategoria'
        }
    },
    nome: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    tamanho: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT(7,2),
        allowNull: false
    },
    Imagem: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    cor: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    Estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    desconto: {
        type: DataTypes.FLOAT(7,2),
        allowNull: true
    }
}, {
    tableName: 'produto',
    timestamps: false
})