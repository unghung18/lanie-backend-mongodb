export declare enum UserRole {
    CLIENT = "Client",
    ADMIN = "Admin"
}
export declare class SignUpDto {
    name: string;
    email: string;
    password: string;
    role: string;
}
