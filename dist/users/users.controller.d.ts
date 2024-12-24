import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(res: Response): Promise<Response<any, Record<string, any>> | import("@nestjs/common").InternalServerErrorException>;
    findOne(id: string, res: Response): Promise<Response<any, Record<string, any>> | import("@nestjs/common").InternalServerErrorException>;
    update(id: string, body: UpdateUserDto, res: Response): Promise<Response<any, Record<string, any>> | import("@nestjs/common").InternalServerErrorException>;
    remove(id: string, res: Response): Promise<Response<any, Record<string, any>> | import("@nestjs/common").InternalServerErrorException>;
}
