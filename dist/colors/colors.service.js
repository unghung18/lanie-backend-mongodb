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
exports.ColorsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const color_schema_1 = require("../schemas/color.schema");
let ColorsService = class ColorsService {
    constructor(colorModel) {
        this.colorModel = colorModel;
    }
    async create(body, res) {
        try {
            const colorData = await this.colorModel.create(body);
            return res.status(201).json({
                data: colorData,
                message: "Created Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async findAll(query, res) {
        try {
            console.log(query);
            const colorsData = await this.colorModel.find({
                $and: [
                    { name: { $regex: query.search ? query.search : "", $options: 'ui' } },
                ]
            });
            return res.status(200).json({
                data: colorsData,
                message: "Retrieved successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async findOne(id, res) {
        try {
            const isValid = mongoose_2.default.Types.ObjectId.isValid(id);
            if (!isValid) {
                return res.status(404).json({
                    error: {
                        message: "Not found"
                    }
                });
            }
            const colorData = await this.colorModel.findOne({ _id: id });
            return res.status(200).json({
                data: colorData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async remove(id, res) {
        try {
            const isValid = mongoose_2.default.Types.ObjectId.isValid(id);
            if (!isValid) {
                return res.status(404).json({
                    error: {
                        message: "Not found"
                    }
                });
            }
            await this.colorModel.findOneAndDelete({ _id: id });
            return res.status(200).json({
                message: "Deleted Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
};
exports.ColorsService = ColorsService;
exports.ColorsService = ColorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(color_schema_1.Color.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ColorsService);
//# sourceMappingURL=colors.service.js.map