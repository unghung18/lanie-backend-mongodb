import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

export interface UserIdRequest extends Request {
    userId: string;
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: UserIdRequest, res: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, data) => {
                if (err) {
                    res.status(403).json({
                        message: "Unauthorized"
                    });
                }
                else {
                    req.userId = data.id
                    next();
                }
            })
        }
        else {
            res.status(403).json({
                message: "Unauthorized"
            });
        }
    }
}
