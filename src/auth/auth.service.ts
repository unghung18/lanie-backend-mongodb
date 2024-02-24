import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { UserIdRequest } from 'src/logger.middleware';
import { Response } from 'express';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async signin(body, res) {
    try {
      const checkedUser = await this.userModel.findOne({
        email: body.email,
      });
      console.log(checkedUser)

      if (!checkedUser) {
        return res.status(400).json({
          error: {
            message: "The provided email does not exist."
          }
        })
      }

      const validPassword = await bcrypt.compare(body.password, checkedUser.password);
      if (!validPassword) {
        return res.status(401).json({
          error: {
            message: "Invalid password"
          }
        })
      }

      if (checkedUser && validPassword) {
        // Sign accesTokken
        const accessKey = jwt.sign({
          id: checkedUser.id,
          role: checkedUser.role
        },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: '30d' }
        )

        const returnUser = checkedUser.toObject();

        return res.status(200).json({
          data: {
            ...returnUser,
            accessKey: accessKey
          },
          message: "Logged Successfully"
        });
      }
    } catch (error) {
      return new InternalServerErrorException();
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
        })
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);

      const newUserData = await this.userModel.create({ ...body, password: hashedPassword })
      return res.status(201).json({
        data: newUserData,
        message: "Created Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async getProfile(req: UserIdRequest, res: Response) {
    try {
      const isValid = mongoose.Types.ObjectId.isValid(req.userId);

      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }

      const userData = await this.userModel.findById(req.userId);
      return res.status(200).json({
        data: userData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
