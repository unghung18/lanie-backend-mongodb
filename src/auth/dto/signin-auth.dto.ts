import { IsNotEmpty, IsDefined, MinLength, IsEmail } from "class-validator";

export class SignInDto {

    @IsEmail()
    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    email: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    @MinLength(6)
    password: string;
}
