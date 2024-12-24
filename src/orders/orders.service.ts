import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) { }

  async create(body, res) {
    try {
      console.log(body);
      const orderData = await this.orderModel.create(body);
      return res.status(201).json({
        data: orderData,
        message: "Created Successfully"
      });
    } catch (error) {
      return new InternalServerErrorException();
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
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: string, body, res) {
    try {
      const productData = await this.orderModel.findOneAndUpdate({ _id: id }, body)
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

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
