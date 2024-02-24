import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin-auth.dto';
import { Response } from 'express';
import { SignUpDto } from './dto/signup-auth.dto';
import { UserIdRequest } from 'src/logger.middleware';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(body: SignInDto, res: Response): Promise<any>;
    signup(body: SignUpDto, res: Response): Promise<any>;
    getProfile(req: UserIdRequest, res: Response): Promise<Response<any, Record<string, any>> | import("@nestjs/common").InternalServerErrorException>;
}
