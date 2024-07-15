import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../schemas/products.schema';
import { ProductRepositoryInterface } from '../interfaces/product.repository.interface';

@Injectable()
export class ProductRepository implements ProductRepositoryInterface {
  constructor(
    @InjectModel(Product.name) private readonly productsModel: Model<Product>,
  ) { }


  async fetch(): Promise<Product[]> {
    return await this.productsModel.find().exec();
  }
}