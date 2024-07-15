import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../schemas/products.schema';
import { ProductRepositoryInterface } from '../interfaces/product.repository.interface';

@Injectable()
export class ProductsService {
    constructor(
        @Inject('ProductRepositoryInterface') private readonly productRepositoryInterface: ProductRepositoryInterface
    ) { }

    async fetch(): Promise<Product[]> {
        return await this.productRepositoryInterface.fetch();
    }
}