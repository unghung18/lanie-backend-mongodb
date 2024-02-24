"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsController = void 0;
const common_1 = require("@nestjs/common");
const colors_service_1 = require("./colors.service");
const create_color_dto_1 = require("./dto/create-color.dto");
let ColorsController = class ColorsController {
    constructor(colorsService) {
        this.colorsService = colorsService;
    }
    create(body, res) {
        return this.colorsService.create(body, res);
    }
    findAll(query, res) {
        return this.colorsService.findAll(query, res);
    }
    findOne(id, res) {
        return this.colorsService.findOne(id, res);
    }
    remove(id, res) {
        return this.colorsService.remove(id, res);
    }
};
exports.ColorsController = ColorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_color_dto_1.CreateColorDto, Object]),
    __metadata("design:returntype", void 0)
], ColorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ColorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ColorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ColorsController.prototype, "remove", null);
exports.ColorsController = ColorsController = __decorate([
    (0, common_1.Controller)('api/colors'),
    __metadata("design:paramtypes", [colors_service_1.ColorsService])
], ColorsController);
//# sourceMappingURL=colors.controller.js.map