type ProductCategory = 'Camiseta' | 'Calça' | 'Bermuda' | 'Tênis' | 'Jaqueta' | 'Moletom';
type ProductSize = '36' | '37' | '38' | '39' | '40' | '41' | 'P' | 'M' | 'G' | 'GG';

interface IProduct {
    name: string;
    category: ProductCategory;
    size: ProductSize;
    color: string;
    price: number;
}