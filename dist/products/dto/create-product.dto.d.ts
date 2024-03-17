export declare class CreateProductDto {
    title: string;
    category: string;
    price: number;
    description: string;
    tags: string[];
    images: string[];
    sale: number;
    sizes: {
        name: string;
        quantity: number;
    }[];
    colors: string[];
    totalQuantity: number;
}
