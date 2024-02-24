import { IsNotEmpty, IsDefined } from "class-validator";

export class CreateColorDto {
    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    name: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    color: string;
}
