import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Collection } from 'src/schemas/collection.schema';

@Injectable()
export class CollectionsService {
  constructor(@InjectModel(Collection.name) private collectionModel: Model<Collection>) { }

  async create(body, res) {
    try {
      const collectionData = await this.collectionModel.create(body);
      return res.status(201).json({
        data: collectionData,
        message: "Created Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async findAll(res) {
    try {
      const collectionsData = await this.collectionModel.find().populate('products');
      return res.status(201).json({
        data: collectionsData,
        message: "Retrieved successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async findOne(id: string, res) {
    try {

      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }

      const collectionData = await this.collectionModel.findOne({ _id: id }).populate('products');

      return res.status(200).json({
        data: collectionData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async update(id: string, body, res) {
    try {
      const collectionData = await this.collectionModel.findOneAndUpdate({ _id: id }, body)
      if (!collectionData) {
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

  async remove(id: string, res) {
    try {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) {
        return res.status(404).json({
          error: {
            message: "Not found"
          }
        })
      }

      await this.collectionModel.findOneAndDelete({ _id: id });

      return res.status(200).json({
        message: "Deleted Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
