import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, Request } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { UserIdRequest } from 'src/logger.middleware';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async findAll(res: Response) {
    try {
      const usersData = await this.userModel.find();
      return res.status(201).json({
        data: usersData,
        message: "Retrieved successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async findOne(id: string, res: Response) {
    try {
      const isValid = mongoose.Types.ObjectId.isValid(id);

      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }

      const userData = await this.userModel.findById(id);
      return res.status(200).json({
        data: userData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async update(id: string, body: UpdateUserDto, res: Response) {
    try {
      const userData = await this.userModel.findOneAndUpdate({ _id: id }, body)
      if (!userData) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }
      return res.status(200).json({
        message: "Updated Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async remove(id: string, res: Response) {
    try {
      const isValid = mongoose.Types.ObjectId.isValid(id);

      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }
      await this.userModel.findOneAndDelete({ _id: id });
      return res.status(200).json({
        message: "Deleted Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

}
