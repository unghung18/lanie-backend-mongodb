import { IsNotEmpty, IsDefined } from "class-validator";

export class CreateCollectionDto {

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    title: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    description: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    products: string[];

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    images: string[];

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    banner_img: string
}

