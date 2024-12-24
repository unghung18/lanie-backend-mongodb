import { IsDefined, IsNotEmpty } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    title: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    category: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    price: number;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    description: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    tags: string[];

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    images: string[];

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    sale: number;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    sizes: {
        name: string,
        quantity: number
    }[]

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    colors: string[];

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    totalQuantity: number;
}

