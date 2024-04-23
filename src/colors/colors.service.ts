import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Color } from 'src/schemas/color.schema';

@Injectable()
export class ColorsService {
  constructor(@InjectModel(Color.name) private colorModel: Model<Color>) { }

  async create(body, res) {
    try {
      const colorData = await this.colorModel.create(body);
      return res.status(201).json({
        data: colorData,
        message: "Created Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
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
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async findOne(id, res) {
    try {

      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }

      const colorData = await this.colorModel.findOne({ _id: id });

      return res.status(200).json({
        data: colorData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async remove(id, res) {
    try {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }
      await this.colorModel.findOneAndDelete({ _id: id });

      return res.status(200).json({
        message: "Deleted Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
