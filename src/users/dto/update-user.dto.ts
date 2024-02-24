
import { IsNotEmpty, IsDefined, MinLength, IsEmail, IsEnum } from "class-validator";

export enum UserRole {
    CLIENT = "Client",
    ADMIN = "Admin",
}

export class UpdateUserDto {

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    email: string;

    @IsEnum(UserRole)
    role: string;
}
