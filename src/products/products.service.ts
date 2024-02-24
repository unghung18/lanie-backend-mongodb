import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/product.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

  async create(body, res) {
    console.log(body)
    try {
      const productData = await this.productModel.create(body);
      return res.status(201).json({
        data: productData,
        message: "Created Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async findAll(query, res) {
    try {
      const productsData = await this.productModel.find(
        {
          $and: [
            { title: { $regex: query.search ? query.search : "", $options: 'ui' } },
          ]
        }
      ).populate('colors');
      return res.status(201).json({
        data: productsData,
        message: "Retrieved Successfully"
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
      const productData = await this.productModel.findOne({ _id: id }).populate('colors');
      return res.status(200).json({
        data: productData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async update(id: string, body, res) {
    try {
      const productData = await this.productModel.findOneAndUpdate({ _id: id }, body)
      if (!productData) {
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

      await this.productModel.findOneAndDelete({ _id: id });

      return res.status(200).json({
        message: "Deleted Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
  async getLatestProducts(res) {
    try {
      const productsData = await this.productModel.find({}).sort({ updatedAt: -1 }).limit(8).populate('colors');

      return res.status(201).json({
        data: productsData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async searchProducts(query, res) {
    try {
      console.log(query)
      const productsData = await this.productModel.find({
        $and: [
          { tags: { $regex: query.query ? query.query : "" } },
          { tags: { $regex: query.category ? query.category : "" } },
          query.color ? { colors: { $all: [query.color] } } : {},
          query.size ? { sizes: { $all: [query.size] } } : {},
          { price: { $gte: query.price ? query.price.split(":")[0] : 0, $lte: query.price ? query.price.split(":")[1] : 10000000 } }
        ]
      })

      return res.status(201).json({
        data: productsData,
        message: "Retrieved Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
