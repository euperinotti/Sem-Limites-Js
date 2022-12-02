import { Model, DataTypes } from "sequelize";
import { componentSequelize } from "../instances/mysql";

type AccountType = 'A' | 'C';
type PixTypeKey = 'Telefone' | 'CPF' | 'E-mail'

export class Client extends Model {
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    telefone: {
        ddd: string;
        numero: string;
    }
    senha: string;
    endereco: {
        rua: string;
        numeroDaCasa: number;
        bairro: string
    };
    pix: {
        tipoDeChave: PixTypeKey;
        chave: string;
    };
    tipo: AccountType;

    constructor(nome: string, sobrenome: string, email: string, cpf: string, telefone: {ddd: string, numero: string}, senha: string, endereco: {rua: string, numeroDaCasa: number, bairro: string}, pix: {tipoDeChave: PixTypeKey, chave: string}, tipo: AccountType){
        super();

        this.nome = nome.trim().slice(0,45);
        this.sobrenome = sobrenome.trim().slice(0,45);
        this.email = email
    }
}

export const Usuario = componentSequelize.define<Client>('Usuario', {
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    frete: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'frete',
            key: 'idfrete'
        }
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    ddd: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    rua: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    n_casa: {
        type: DataTypes.MEDIUMINT,
        allowNull: false
    },
    pix: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    tipo: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }

}, {
    tableName: 'usuario',
    timestamps: false
})