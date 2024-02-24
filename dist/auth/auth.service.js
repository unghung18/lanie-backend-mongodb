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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signin(body, res) {
        try {
            const checkedUser = await this.userModel.findOne({
                email: body.email,
            });
            console.log(checkedUser);
            if (!checkedUser) {
                return res.status(400).json({
                    error: {
                        message: "The provided email does not exist."
                    }
                });
            }
            const validPassword = await bcrypt.compare(body.password, checkedUser.password);
            if (!validPassword) {
                return res.status(401).json({
                    error: {
                        message: "Invalid password"
                    }
                });
            }
            if (checkedUser && validPassword) {
                const accessKey = jwt.sign({
                    id: checkedUser.id,
                    role: checkedUser.role
                }, process.env.JWT_ACCESS_KEY, { expiresIn: '30d' });
                const returnUser = checkedUser.toObject();
                return res.status(200).json({
                    data: {
                        ...returnUser,
                        accessKey: accessKey
                    },
                    message: "Logged Successfully"
                });
            }
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async signup(body, res) {
        try {
            const isExist = await this.userModel.findOne({
                email: body.email,
            });
            if (isExist) {
                return res.status(400).json({
                    error: {
                        message: "Email already exists !!!"
                    }
                });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(body.password, salt);
            const newUserData = await this.userModel.create({ ...body, password: hashedPassword });
            return res.status(201).json({
                data: newUserData,
                message: "Created Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
    async getProfile(req, res) {
        try {
            const isValid = mongoose_2.default.Types.ObjectId.isValid(req.userId);
            if (!isValid) {
                return res.status(404).json({
                    error: {
                        message: "Not found"
                    }
                });
            }
            const userData = await this.userModel.findById(req.userId);
            return res.status(200).json({
                data: userData,
                message: "Retrieved Successfully"
            });
        }
        catch (error) {
            return new common_1.InternalServerErrorException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map