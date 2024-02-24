import { IsNotEmpty, IsDefined, MinLength, IsEmail, IsEnum } from "class-validator";

export enum UserRole {
    CLIENT = "Client",
    ADMIN = "Admin",
}

export class SignUpDto {

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    email: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    @MinLength(6)
    password: string;

    @IsEnum(UserRole)
    role: string;

}
