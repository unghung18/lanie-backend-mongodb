"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (validationErrors = []) => {
            const arrayError = validationErrors.map((error) => ({
                [error.property]: (Object.values(error.constraints).join()).charAt(0).toUpperCase() + (Object.values(error.constraints).join(', ')).slice(1),
            }));
            return new common_1.HttpException({
                error: arrayError,
                message: "Invalid input"
            }, 400);
        },
        whitelist: true,
        transform: true,
        stopAtFirstError: true,
        skipMissingProperties: true
    }));
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map