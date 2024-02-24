import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export interface UserIdRequest extends Request {
    userId: string;
}
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: UserIdRequest, res: Response, next: NextFunction): void;
}
