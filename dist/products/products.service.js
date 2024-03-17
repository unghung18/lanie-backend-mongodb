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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("../schemas/product.schema");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(body, res) {
        console.log(body);
        try {
            const productData = await this.productModel.create(body);
            return res.status(201).json({
                data: productData,
                message: "Created Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async findAll(query, res) {
        try {
            const productsData = await this.productModel.find({
                $and: [
                    { tags: { $regex: query.search ? query.search : "", $options: 'ui' } },
                    { tags: { $regex: query.category ? query.category : "", $options: 'ui' } },
                    query.size ? { sizes: { $all: [{ $elemMatch: { name: { $regex: query.size ? query.size : "", $options: 'ui' } } }] } } : {},
                    { price: { $gte: query.price ? query.price.split(":")[0] : 0, $lte: query.price ? query.price.split(":")[1] : 10000000 } }
                ]
            }).populate("colors");
            return res.status(201).json({
                data: productsData,
                message: "Retrieved Successfully"
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
            const productData = await this.productModel.findOne({ _id: id }).populate('colors');
            return res.status(200).json({
                data: productData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async update(id, body, res) {
        try {
            const productData = await this.productModel.findOneAndUpdate({ _id: id }, body);
            if (!productData) {
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
            await this.productModel.findOneAndDelete({ _id: id });
            return res.status(200).json({
                message: "Deleted Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async getLatestProducts(res) {
        try {
            const productsData = await this.productModel.find({}).sort({ updatedAt: -1 }).limit(8).populate('colors');
            return res.status(201).json({
                data: productsData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async searchProducts(query, res) {
        try {
            console.log(query);
            const productsData = await this.productModel.find({
                $and: [
                    { tags: { $regex: query.query ? query.query : "" } },
                    { tags: { $regex: query.category ? query.category : "" } },
                    query.color ? { colors: { $all: [query.color] } } : {},
                    query.size ? { sizes: { $all: [query.size] } } : {},
                ]
            });
            return res.status(201).json({
                data: productsData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async getSaleProducts(query, res) {
        try {
            const productsData = await this.productModel.find({
                $and: [
                    { sale: { $nin: [0] } },
                    { tags: { $regex: query.search ? query.search : "", $options: 'ui' } },
                    { tags: { $regex: query.category ? query.category : "", $options: 'ui' } },
                    query.size ? { sizes: { $all: [query.size] } } : {},
                    { price: { $gte: query.price ? query.price.split(":")[0] : 0, $lte: query.price ? query.price.split(":")[1] : 10000000 } }
                ]
            }).populate("colors");
            return res.status(201).json({
                data: productsData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map