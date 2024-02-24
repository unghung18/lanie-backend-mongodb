"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsModule = void 0;
const common_1 = require("@nestjs/common");
const colors_service_1 = require("./colors.service");
const colors_controller_1 = require("./colors.controller");
const mongoose_1 = require("@nestjs/mongoose");
const color_schema_1 = require("../schemas/color.schema");
let ColorsModule = class ColorsModule {
};
exports.ColorsModule = ColorsModule;
exports.ColorsModule = ColorsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: color_schema_1.Color.name, schema: color_schema_1.ColorSchema }])],
        controllers: [colors_controller_1.ColorsController],
        providers: [colors_service_1.ColorsService],
    })
], ColorsModule);
//# sourceMappingURL=colors.module.js.map