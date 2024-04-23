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
exports.CollectionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collection_schema_1 = require("../schemas/collection.schema");
let CollectionsService = class CollectionsService {
    constructor(collectionModel) {
        this.collectionModel = collectionModel;
    }
    async create(body, res) {
        try {
            const collectionData = await this.collectionModel.create(body);
            return res.status(201).json({
                data: collectionData,
                message: "Created Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async findAll(res) {
        try {
            const collectionsData = await this.collectionModel.find().populate({
                path: 'products',
                populate: {
                    path: 'colors',
                    model: 'Color'
                }
            });
            return res.status(200).json({
                data: collectionsData,
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
            const collectionData = await this.collectionModel.findOne({ _id: id }).populate('products');
            return res.status(200).json({
                data: collectionData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async update(id, body, res) {
        try {
            const collectionData = await this.collectionModel.findOneAndUpdate({ _id: id }, body);
            if (!collectionData) {
                return res.status(404).json({
                    error: {
                        message: "Not found"
                    }
                });
            }
            return res.status(200).json({
                message: "Updated Successfully"
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
            await this.collectionModel.findOneAndDelete({ _id: id });
            return res.status(200).json({
                message: "Deleted Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
};
exports.CollectionsService = CollectionsService;
exports.CollectionsService = CollectionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collection_schema_1.Collection.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CollectionsService);
//# sourceMappingURL=collections.service.js.map