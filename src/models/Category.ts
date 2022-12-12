import { Model, DataTypes } from "sequelize";
import { componentSequelize } from "../instances/mysql";

export class CategoryClass extends Model {
    idcategoria?: number;
    nome: string;

    constructor(nome: string) {
        super();
        
        this.nome = nome.trim().slice(0,50);
    }
}

export const Category = componentSequelize.define<CategoryClass>('Category', {
    idcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    tableName: 'categoria',
    timestamps: false
})