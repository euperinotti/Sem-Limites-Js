interface IClient {
    name: string;
    lastName: string;
    email: string;
    password: string;
    cpf: string;
    ddd: string;
    phone: string;
    address: {
        street: string;
        district: string;
        houseNumber: number;
    };
    pix: {
        type: 'telefone' | 'cpf' | 'email';
        key: 'string';
    };
}