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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("../schemas/order.schema");
let OrdersService = class OrdersService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async create(body, res) {
        try {
            console.log(body);
            const orderData = await this.orderModel.create(body);
            return res.status(201).json({
                data: orderData,
                message: "Created Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async findAll(query, res) {
        try {
            const orderData = await this.orderModel.find().populate({
                path: 'products.product',
                model: 'Product'
            });
            return res.status(200).json({
                data: orderData,
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
            const productData = await this.orderModel.findOne({ _id: id }).populate({
                path: 'products.product',
                model: 'Product'
            });
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
            const productData = await this.orderModel.findOneAndUpdate({ _id: id }, body);
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
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
//# sourceMappingURL=orders.service.js.map